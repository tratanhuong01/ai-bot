import md5 from "md5";
import { UserRepository } from "../repositories/user.repository";
import { User, UserUpdatePayload } from "../interfaces/user.interface";
import { FilterCommon } from "../dto/common.dto";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import { timestampCurrent } from "../utils";

export class UserService {
  generateAccessToken(user: User) {
    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY ?? "SECRET_KEY",
      { expiresIn: "1h" }
    );
  }
  async getUsers(filters: FilterCommon) {
    try {
      const query = UserRepository.query().select(
        "id",
        "fullname",
        "email",
        "avatar",
        "is_admin",
        "last_sign_in_at",
        "is_active",
        "phone"
      );
      query.where("is_admin", false);
      if (filters.search) {
        query.whereILike("email", `%${filters.search}%`);
        query.orWhereILike("fullname", `%${filters.search}%`);
      }

      if (Object.keys(filters.filters ?? {}).length > 0) {
        Object.keys(filters.filters).forEach((item) => {
          query.andWhere(
            item,
            filters.filters[item].operator,
            filters.filters[item].value
          );
        });
      }
      const total = await query;
      if (filters.pagable) {
        query.offset(filters.pagable.offset);
        query.limit(filters.pagable.limit);
      }

      if (filters.sort) {
        query.orderBy(filters.sort.field, filters.sort.isASC ? "asc" : "desc");
      }
      const data = await query;

      return {
        total: total.length,
        data: [...data].map((item) => item.toJSON() as User),
        code: "success",
        status: 200,
      };
    } catch (error) {
      return {
        error,
        code: "error",
        status: 400,
      };
    }
  }

  async createUser(user: User) {
    try {
      const check = await UserRepository.query()
        .select()
        .where("email", user.email);
      if (check.length) {
        if (user.avatar) await fs.unlink(user.avatar);
        return {
          code: "duplicate",
          status: 400,
        };
      }
      await UserRepository.query().insert({
        ...user,
        password: md5("Abc123!@#"),
      });
      return {
        code: "success",
        status: 200,
        user,
      };
    } catch (error) {
      return {
        code: "error",
        status: 400,
        error,
        user,
      };
    }
  }

  async updateUser(payload: UserUpdatePayload) {
    try {
      if (
        payload.user.avatar !== payload.thumbnailOld &&
        payload.thumbnailOld
      ) {
        await fs.unlink(payload.thumbnailOld);
      }
      await UserRepository.query()
        .update({ ...payload.user, updated_at: timestampCurrent() })
        .where("id", payload.user.id);
      return {
        code: "success",
        status: 200,
      };
    } catch (error) {
      return {
        code: "error",
        status: 400,
        error,
      };
    }
  }

  async deleteUser(ids: string[]) {
    try {
      await UserRepository.query().whereIn("id", ids).update({
        is_active: false,
      });
      return {
        code: "success",
        status: 200,
      };
    } catch (error) {
      return {
        code: "error",
        status: 400,
        error,
      };
    }
  }

  async loginUser(payload: { email: string; password: string }) {
    try {
      const result = await UserRepository.query()
        .select(
          "id",
          "fullname",
          "email",
          "is_active",
          "avatar",
          "is_admin",
          "phone"
        )
        .where("email", payload.email)
        .andWhere("password", md5(payload.password));
      const user = result?.[0] as any;
      if (user?.is_active) {
        return {
          data: user,
          access_token: jwt.sign(
            { id: user.id, email: user.email },
            process.env.SECRET_KEY ?? "",
            { expiresIn: 3600 }
          ),
          status: 200,
          code: "success",
        };
      }
      return {
        data: null,
        status: 400,
        code: "not-found",
        message: "User not exist",
      };
    } catch (error) {
      return {
        error,
        code: "error",
        status: 400,
      };
    }
  }
  async getUserById(id: string) {
    try {
      const result = await UserRepository.query()
        .select(
          "id",
          "fullname",
          "email",
          "is_active",
          "avatar",
          "address",
          "phone"
        )
        .where("id", id);
      const user = result?.[0] as any;
      if (user) {
        return {
          data: user,
          status: 200,
          code: "success",
        };
      }
      return {
        status: 400,
        code: "not-found",
        message: "User not exist",
      };
    } catch (error) {
      return {
        error,
        code: "error",
        status: 400,
      };
    }
  }
}

export const userService = new UserService();

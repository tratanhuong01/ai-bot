import express from "express";
import jwt from "jsonwebtoken";

const authenticateToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res
      .json({
        code: "token_invalid",
        status: 401,
      })
      .status(401);
  }
  jwt.verify(
    token ?? "",
    process.env.SECRET_KEY ?? "SECRET_KEY",
    (err: any, payload: any) => {
      if (err)
        res
          .json({
            code: "access_denied",
            status: 403,
            error: err,
          })
          .status(403);
      else {
        next();
      }
    }
  );
};

export default authenticateToken;

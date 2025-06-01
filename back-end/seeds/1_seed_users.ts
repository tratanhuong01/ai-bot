import { Knex } from "knex";
import md5 from "md5";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  const users = [
    {
      id: "d6b6b0c1-c43c-4328-af13-9b1c7b3a3d39",
      fullname: "Admin",
      is_admin: true,
      is_active: true,
      email: "admin@gmail.com",
      password: md5("Abc123!@#"),
      phone: "84987654321",
      address: {
        display_name: "35 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
      },
    },
    {
      id: "64532eba-0fe1-44de-8608-ea13fd5971ef",
      fullname: "Packer Tra",
      is_admin: false,
      is_active: true,
      email: "packer.tra@example.com",
      password: md5("Abc123!@#"),
      phone: "849035337890",
      address: {
        display_name: "99 Nguyễn Tri Phương, Thanh Khê, Đà Nẵng",
      },
      title: "Software Engineer",
      avatar: "resources/static/images/users/avatars/packer-tra.jpg",
    },
    {
      id: "d2efe63f-cac7-4830-9df4-178a610b0b07",
      fullname: "Bellamy Nguyen",
      is_admin: false,
      is_active: true,
      email: "bellamy.nguyen@example.com",
      password: md5("Abc123!@#"),
      phone: "84912345678",
      address: {
        display_name: "33 Phan Đình Phùng, Hải Châu, Đà Nẵng",
      },
      title: "DH, Software Engineer",
      avatar: "resources/static/images/users/avatars/bellamy-nguyen.jpg",
    },
    {
      id: "39cad972-881d-4c90-a1ce-127f5e31f7a0",
      fullname: "Caleb Nguyen",
      is_admin: false,
      is_active: true,
      email: "caleb.nguyen@example.com",
      password: md5("Abc123!@#"),
      phone: "84903567890",
      address: {
        display_name: "66 Lý Thái Tổ, Thanh Khê, Đà Nẵng",
      },
      title: "Software Engineer",
      avatar: "resources/static/images/users/avatars/caleb-nguyen.jpg",
    },
    {
      id: "ea5574ca-5d94-48d2-bd2b-38d9606b801b",
      fullname: "Sargon Hoang",
      is_admin: false,
      is_active: true,
      email: "sargon.hoang@example.com",
      password: md5("Abc123!@#"),
      phone: "84923678901",
      address: {
        display_name: "111 Lê Duẩn, Hải Châu, Đà Nẵng",
      },
      title: "Software Engineer",
      avatar: "resources/static/images/users/avatars/sargon-hoang.jpg",
    },
  ];

  // Inserts seed entries
  await knex("users").insert(users);
}

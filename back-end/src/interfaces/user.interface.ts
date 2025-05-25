export interface User {
  id: number;
  email: string;
  password: string;
  fullname: string;
  is_admin: boolean;
  avatar: string;
  address: string;
  created_at: string;
  updated_at: string;
  last_sign_in_at?: string;
  is_active: boolean;
}

export type UserCreatePayload = {
  user: User;
};

export type UserUpdatePayload = {
  user: User;
  thumbnailOld: string;
};

export interface User {
  id: string;
  fullname: string;
  email: string;
  avatar: string;
  is_admin: boolean;
  last_sign_in_at: string | null; // or Date | null if you're using Date objects
  is_active: boolean;
  phone: string;
  title: string;
}

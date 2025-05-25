"use client";

import AdminWrapper from "@/components/admin/layout/wrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AdminWrapper>{children}</AdminWrapper>;
};

export default Layout;

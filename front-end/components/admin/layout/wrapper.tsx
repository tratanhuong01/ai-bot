"use client";

import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { usePathname } from "next/navigation";
import "@/global/global-setup";

type AdminWrapperProps = {
  children?: ReactNode;
};

const AdminWrapper = ({ children }: AdminWrapperProps) => {
  const pathname = usePathname();
  if (pathname.includes("/admin/login")) return children;
  return (
    <div className="w-full h-screen flex overflow-hidden flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Header />
        <div className="flex-1 h-full overflow-x-hidden overflow-y-scroll px-2 sm:px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminWrapper;

"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import jscookie from "js-cookie";
import { ADMIN_SESSION } from "@/services/user.service";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between w-full items-center p-5 bg-white border-b border-gray-200 shadow-xs">
      <div>
        <p className="text-xl font-bold text-gray-700">Welcome back</p>
        <p className="text-xs text-gray-500">Hello Remons</p>
      </div>
      <Input
        className="px-4 py-3 text-sm border border-solid border-gray-200 rounded-full bg-gray-100 w-60"
        type="text"
        placeholder="Search..."
        disabled
      />
      <span
        aria-hidden
        onClick={async () => {
          jscookie.remove(ADMIN_SESSION);
          router.push("/admin/login");
        }}
        className="text-primary text-sm font-bold underline cursor-pointer"
      >
        Logout
      </span>
    </div>
  );
};

export default Header;

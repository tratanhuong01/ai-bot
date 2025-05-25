"use client";

import ImageContainer from "@/components/shared/image";
import sidebars from "./sidebars";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname.replace("/admin", ""));
  const route = useRouter();
  return (
    <ul className="w-72 p-2 shadow-r-xl h-screen border-r border-solid border-gray-200 shadow-sm">
      <li>
        <ImageContainer
          className="w-32 mt-5 mb-16 object-cover mx-auto"
          src="/logo.svg"
          alt=""
        />
      </li>
      {sidebars.map((sidebar) => (
        <li
          aria-hidden
          onClick={() => {
            setCurrent(sidebar.path);
            route.push(`/admin${sidebar.path}`);
          }}
          key={sidebar.name}
          className={`mb-0.5 p-3 transition-colors rounded-lg cursor-pointer flex items-center gap-3 
          ${
            current.includes(sidebar.path)
              ? "text-white bg-primary"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          <i className={sidebar.icon}></i>
          <span>{sidebar.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;

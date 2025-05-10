"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <Link href="/" className="text-2xl font-bold">
        AINext
      </Link>
      <nav className="flex space-x-12 text-gray-300">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/about" className="hover:text-white">
          Products
        </Link>
        <Link href="/contact" className="hover:text-white">
          Blogs
        </Link>
        <Link href="/contact" className="hover:text-white">
          Teams
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </nav>
      <div className="flex space-x-4">
        <Button onClick={() => {}}>
          <span>Get started</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;

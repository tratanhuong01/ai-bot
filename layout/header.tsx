"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex justify-between py-6 md:hidden">
        <Link
          href="/"
          className="text-4xl md:text-2xl mb-6 md:mb-0 block md:inline font-bold text-gradient md:text-white"
        >
          AINext
        </Link>
        <MenuIcon className="cursor-pointer" onClick={toggleMenu} size={32} />
      </div>
      <div
        className={`w-[400px] fixed z-20 top-0 right-0 overflow-hidden bg-white h-screen p-8 py-20 shadow-lg md:h-auto md:relative md:flex 
        md:justify-between md:items-center md:py-10 md:px-0 md:bg-transparent md:shadow-none md:w-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:transition-none md:translate-x-0`}
      >
        <XIcon
          className="absolute top-8 right-6 z-10 cursor-pointer hover:text-[] md:hidden"
          color="black"
          size={24}
          onClick={closeMenu}
        />
        <Link
          href="/"
          className="text-4xl md:text-2xl mb-6 md:mb-0 block md:inline font-bold text-gradient md:text-white"
        >
          AINext
        </Link>
        <nav className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-12 md:text-gray-400 text-black mb-10 md:mb-0">
          <Link href="/" className="md:hover:text-white">
            Home
          </Link>
          <Link href="/products" className="md:hover:text-white">
            Products
          </Link>
          <Link href="/blogs" className="md:hover:text-white">
            Blogs
          </Link>
          <Link href="/#teams" className="md:hover:text-white">
            Teams
          </Link>
          <Link href="/contact" className="md:hover:text-white">
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
      <div
        aria-hidden
        className={`fixed top-0 right-0 z-10 w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;

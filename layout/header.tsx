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
      {/* Mobile Header */}
      <div className="flex justify-between items-center py-6 px-4 md:hidden">
        <Link href="/" className="text-3xl font-bold text-gradient">
          AINext
        </Link>
        <MenuIcon className="cursor-pointer" onClick={toggleMenu} size={32} />
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center py-8 px-12">
        <Link href="/" className="text-2xl font-bold text-white">
          AINext
        </Link>
        <nav className="flex space-x-12 text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/blogs" className="hover:text-white">
            Blogs
          </Link>
          <Link href="/#teams" className="hover:text-white">
            Teams
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Button>
            <span>Get started</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 z-30 w-[80%] sm:w-[400px] h-screen bg-white p-8 pt-20 shadow-lg transition-transform duration-300 ease-in-out transform will-change-transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <XIcon
          className="absolute top-6 right-6 cursor-pointer z-10 text-black"
          size={28}
          onClick={closeMenu}
        />
        <Link href="/" className="text-3xl font-bold mb-6 block text-gradient">
          AINext
        </Link>
        <nav className="flex flex-col space-y-6 text-black mb-10">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/blogs" onClick={closeMenu}>
            Blogs
          </Link>
          <Link href="/#teams" onClick={closeMenu}>
            Teams
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <Button onClick={() => {}}>
          <span>Get started</span>
          <ChevronRightIcon />
        </Button>
      </div>

      {/* Overlay */}
      <div
        aria-hidden
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-8 border-t border-gray-900">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
        <div>
          <Link href="" className="text-2xl font-bold">
            AINext
          </Link>
          <p className="mt-6 text-gray-400">
            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim
            eros elementum tristique. Duis cursus.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link
              href="https://www.facebook.com/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              href="https://www.facebook.com/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link
              href="https://www.facebook.com/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </Link>
            <Link
              href="https://www.facebook.com/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
              target="_blank"
            >
              <i className="bx bxl-youtube"></i>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Links</p>
          <div className="mt-6 flex flex-col gap-2 text-gray-400">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/teams">Teams</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Legal</p>
          <div className="mt-6 flex flex-col gap-2 text-gray-400">
            <Link href="/">Legal</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Terms & Condition</Link>
            <Link href="/">Payment Method</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Newsletter</p>
          <p className="my-6 text-gray-400">
            Join over 68,000 people getting our emails Lorem ipsum dolor sit
            amet consectet
          </p>
          <div className="flex flex-col gap-2">
            <Input />
            <Button className="h-12">
              <SendIcon />
              <span>Subscribe now</span>
            </Button>
          </div>
        </div>
      </div>
      <p className="text-center pt-6 text-sm text-gray-400 border-t border-gray-900">
        © Copyright | <span className="font-bold">Theme Ocean</span> | All
        Rights Reserved is Proudly
      </p>
    </div>
  );
};

export default Footer;

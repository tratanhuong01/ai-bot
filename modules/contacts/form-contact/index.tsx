import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const FormContact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 py-32">
      <div className="lg:w-1/2 flex flex-col gap-2">
        <span className="bg-[#290481] py-1 px-4 rounded-sm whitespace-nowrap block max-w-min text-white">
          Contact
        </span>
        <p className="text-6xl font-bold">Join Our Network</p>
        <p className="text-gray-400">
          We'd love to have you! Join our 100% remote network of creators &
          freelancers.
        </p>
        <form action="" className="flex flex-col gap-4 mt-12">
          <Input
            className="focus-visible:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 focus:border-[#290481] w-full py-6 px-4"
            type="text"
            placeholder="Name"
          />
          <Input
            className="focus-visible:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 focus:border-[#290481] w-full py-6 px-4"
            type="text"
            placeholder="Email address"
          />
          <Input
            className="focus-visible:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 focus:border-[#290481] w-full py-6 px-4"
            type="text"
            placeholder="Subject"
          />
          <Input
            className="focus-visible:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-400 focus:border-[#290481] w-full py-6 px-4"
            type="text"
            placeholder="Phone number"
          />
          <Textarea
            className="focus-visible:ring-0 border-t-0 rounded-xs resize-none border-r-0 border-l-0 border-b-2 border-gray-400 focus:border-[#290481] w-full py-6 px-4"
            placeholder="Write your message here..."
            rows={5}
          />
          <Button className="w-64 mt-8 h-12">
            <span>Send message</span>
            <SendIcon />
          </Button>
        </form>
      </div>
      <div className="flex-1 relative hidden lg:block">
        <Image
          src="https://ainext-react.vercel.app/assets/contact-fhtFP4DX.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default FormContact;

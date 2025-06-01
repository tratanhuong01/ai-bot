"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type ComingSoonProps = {
  isDark?: boolean;
};

const ComingSoon = ({ isDark }: ComingSoonProps) => {
  const router = useRouter();
  return (
    <div
      className={`w-11/12 sm:w-[400px] my-8 mx-auto flex flex-col items-center justify-center ${
        isDark ? "text-white" : ""
      } text-center gap-2`.trim()}
    >
      <RocketIcon size={40} />
      <p className="text-4xl font-bold">Coming soon</p>
      <p className="text-gray-400 text-sm text-center">
        We're coming soon.We're working hard to give you the best experience.
      </p>
      <div className="text-center mt-5">
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default ComingSoon;

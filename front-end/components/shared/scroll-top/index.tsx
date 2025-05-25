"use client";

import { forwardRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpSquare } from "lucide-react";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    setScrollTop(window?.scrollY ?? 0);
  };
  const pathname = usePathname();
  useEffect(() => {
    setScrollTop(0);
  }, [pathname]);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  //
  return (
    <>
      <div
        className="h-1 bg-primary shadow-xxl rounded-sm fixed z-50 top-0 left-0"
        style={{
          width: `${
            scrollTop ? (scrollTop / ((window.scrollY ?? 0) - 991)) * 100 : 0
          }%`,
        }}
      />
      {scrollTop > 200 ? (
        <div
          aria-hidden
          className="fixed bottom-10 flex items-center justify-center right-4 md:right-8 z-20 border border-solid border-primary text-primary bg-white 
          rounded-full cursor-pointer hover:bg-primary hover:text-white w-[50px] h-[50px]"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowUpSquare size={22} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default forwardRef(ScrollTop);

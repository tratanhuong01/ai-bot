"use client";

import { forwardRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpSquare } from "lucide-react";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) return;

    const onScroll = () => {
      const scrollTopValue = root.scrollTop;
      const scrollHeight = root.scrollHeight - root.clientHeight;

      setScrollTop(scrollTopValue);
      setScrollPercent(
        scrollHeight > 0 ? (scrollTopValue / scrollHeight) * 100 : 0
      );
    };

    // Reset scrollTop on route change
    root.scrollTo({ top: 0 });
    setScrollTop(0);
    setScrollPercent(0);

    root.addEventListener("scroll", onScroll);
    return () => {
      root.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const handleScrollToTop = () => {
    const root = document.getElementById("root");
    root?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="h-1 bg-primary shadow-xxl rounded-sm fixed z-50 top-0 left-0"
        style={{
          width: `${scrollPercent}%`,
        }}
      />
      {scrollTop > 200 && (
        <div
          aria-hidden
          className="fixed bottom-10 flex items-center justify-center right-4 md:right-8 z-20 border border-solid border-primary text-primary bg-white 
          rounded-full cursor-pointer hover:bg-primary hover:text-white w-[50px] h-[50px]"
          onClick={handleScrollToTop}
        >
          <ArrowUpSquare size={22} />
        </div>
      )}
    </>
  );
};

export default forwardRef(ScrollTop);

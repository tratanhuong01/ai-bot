"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type SearchPopupProps = {
  children: React.ReactNode;
};

const SearchPopup = ({ children }: SearchPopupProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleResize = () => window.innerWidth > 768 && setOpen(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-11/12 rounded-sm">
        <DialogTitle className="text-xl -mt-2">Search</DialogTitle>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            router.push(
              `/${
                pathname.startsWith("/blogs") ? "blogs" : "cars"
              }?search=${value}`
            );
            setOpen(false);
          }}
        >
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Search"
              className="flex-1 focus:ring-0 rounded-sm h-10 focus-visbible:ring-0 focus-within:ring-0 outline-none focus:outline-none"
            />
            <Button type="submit" className="w-10 h-10 rounded-sm">
              <SearchIcon size={16} />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPopup;

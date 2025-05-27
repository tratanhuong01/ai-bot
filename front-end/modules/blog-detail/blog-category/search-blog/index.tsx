"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBlog = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const onRedriect = (value: string) => {
    router.push(`/blogs?search=${value}`);
  };
  return (
    <>
      <p className="text-xl font-bold">Search</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRedriect(search);
        }}
        className="flex flex-row"
      >
        <Input
          className="flex-1 border-gray-700 h-12 focus-visible:ring-0 focus-within:ring-0 outline-none"
          placeholder="Search here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <Button
          type="submit"
          className="h-12 -ml-1 rounded-tl-none rounded-bl-none rounded-tr-sm rounded-br-sm"
        >
          <SearchIcon />
        </Button>
      </form>
    </>
  );
};

export default SearchBlog;

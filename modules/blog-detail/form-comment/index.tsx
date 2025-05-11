import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormComment = () => {
  return (
    <div className="mt-8">
      <p className="text-2xl font-semibold">Leave a Reply</p>
      <p className="text-gray-400 mt-2 mb-4">
        Your email address will not be published.Required fields are marked *
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Name" className="bg-white h-12" />
          <Input placeholder="Email" className="bg-white h-12" />
        </div>
        <Input placeholder="You website" className="bg-white h-12" />
        <Textarea
          placeholder="You comment"
          className="rounded-xs resize-none bg-white h-32"
        />
      </form>
      <div className="flex items-center gap-4 my-6">
        <Checkbox />
        <span>
          Save my name, email, and website in this browser for the next time I
          comment.
        </span>
      </div>
      <Button className="w-52 h-12">Post a comment</Button>
    </div>
  );
};

export default FormComment;

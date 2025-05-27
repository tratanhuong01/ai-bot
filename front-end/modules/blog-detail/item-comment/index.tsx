import Avatar from "@/components/shared/avatar";
import { Button } from "@/components/ui/button";
import { Comment } from "@/interfaces/comment.interface";
import moment from "moment";
import React from "react";

type ItemCommentProps = {
  comment: Comment;
};

const ItemComment = ({ comment }: ItemCommentProps) => {
  return (
    <div className="border-b border-dashed flex items-start gap-4 py-4">
      <Avatar size={50} name={comment.name} />
      <div className="flex-1 text-gray-400 flex flex-col">
        <p className="font-bold text-xl">{comment.name}</p>
        <p className="text-sm font-thin">
          {moment(comment?.created_at).format("MMMM D, YYYY")}
        </p>
        <p className="my-2">{comment.content}</p>
        <Button
          variant="outline"
          className="bg-transparent border-dashed rounded-full max-w-min"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};

export default ItemComment;

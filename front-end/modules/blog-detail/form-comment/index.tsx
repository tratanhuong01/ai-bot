"use client";

import { Form } from "@/components/shared/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { schema } from "./schema";
import { FormGroup } from "@/components/shared/form-group";
import { FormField } from "@/components/shared/form-field";

type FormCommentProps = {
  onSubmit: (data: any) => void;
  loading?: boolean;
};

const FormComment = ({ onSubmit, loading }: FormCommentProps) => {
  if (localStorage.getItem("commented")) {
    return <></>;
  }

  return (
    <Form onSubmit={(data) => onSubmit(data)} zodResolver={zodResolver(schema)}>
      <div className="mt-8 mb-8 lg:mb-0 relative">
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-gray-400">Sending your comment...</p>
          </div>
        )}
        <p className="text-2xl font-semibold">Leave a Reply</p>
        <p className="text-gray-400 mt-2 mb-4">
          Your email address will not be published.Required fields are marked *
        </p>
        <div className="flex flex-col gap-4 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup name="name" label="">
              <FormField>
                <Input placeholder="Name" className="bg-white h-12" />
              </FormField>
            </FormGroup>
            <FormGroup name="email" label="">
              <FormField>
                <Input placeholder="Email" className="bg-white h-12" />
              </FormField>
            </FormGroup>
          </div>
          <FormGroup name="content" label="">
            <FormField>
              <Textarea
                placeholder="Comment"
                className="bg-white h-32 resize-none"
              />
            </FormField>
          </FormGroup>
        </div>
        <div className="flex items-center gap-4 my-6">
          <Checkbox />
          <span>
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </div>
        <Button type="submit" className="w-52 h-12">
          Post a comment
        </Button>
      </div>
    </Form>
  );
};

export default FormComment;

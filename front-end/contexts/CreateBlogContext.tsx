"use client";

import { createContext, ReactNode } from "react";
import {
  ContextType,
  initialState,
  useCustomContext,
} from "@/hooks/use-custom-context";
import CreateBlog from "@/components/admin/pages/create-blog";

export type CreateBlogState = {
  thumbnailNew?: File;
  thumbnailOld?: string;
};

const init: CreateBlogState = {};

const initContext: ContextType<CreateBlogState> =
  initialState<CreateBlogState>(init);

const CreateBlogContext =
  createContext<ContextType<CreateBlogState>>(initContext);

const CreateBlogProvider = ({ children }: { children: ReactNode }) => {
  const CustomProvider = useCustomContext(init, CreateBlogContext);
  return <CustomProvider>{children}</CustomProvider>;
};

const WrapperCreateBlog = () => {
  return (
    <CreateBlogProvider>
      <CreateBlog />
    </CreateBlogProvider>
  );
};

export { CreateBlogContext, CreateBlogProvider, WrapperCreateBlog };

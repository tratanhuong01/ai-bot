import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type BreadcrumbsProps = {
  title?: string;
};

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
  return (
    <div className="absolute bottom-28 z-10 left-0 w-full">
      <div className="container flex flex-col gap-2 mx-auto">
        <div className="w-[100px] bg-[#7f00ff] h-[2px] mb-5" />
        <p className="text-4xl font-bold py-2">{title}</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white hover:text-white" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-400">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;

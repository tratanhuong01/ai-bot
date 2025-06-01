"use client";

import { HeaderModeType } from "@/types/common";
import React from "react";
import Banner from "./banner";
import "@/global/global-setup";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({
  children,
  headerMode,
  title,
}: MainLayoutProps & HeaderModeType) => {
  return (
    <>
      <Banner headerMode={headerMode} title={title} />
      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;

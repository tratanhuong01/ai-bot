import React from "react";
import Footer from "./footer";
import Banner from "./banner";
import { HeaderModeType } from "@/types/common";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({
  children,
  headerMode,
  title,
}: MainLayoutProps & HeaderModeType) => {
  return (
    <div className="bg-[#050913] text-white w-full min-h-screen">
      <Banner headerMode={headerMode} title={title} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

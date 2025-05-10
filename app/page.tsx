import MainLayout from "@/layout/main-layout";
import LatestBlog from "@/modules/blogs/latest-blog";
import Teams from "@/modules/teams";
import React from "react";

const HomePage = () => {
  return (
    <MainLayout headerMode="banner">
      <Teams />
      <LatestBlog />
    </MainLayout>
  );
};

export default HomePage;

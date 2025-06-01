import ComingSoon from "@/layout/coming-soon";
import MainLayout from "@/layout/main-layout";
import React from "react";

const GetStarted = () => {
  return (
    <MainLayout headerMode="breadcrumbs" title="Get Started">
      <ComingSoon />
    </MainLayout>
  );
};

export default GetStarted;

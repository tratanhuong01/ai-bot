import MainLayout from "@/layout/main-layout";
import AboutUs from "@/modules/about-us";
import BenefitsProduct from "@/modules/benefits-product";
import LatestBlog from "@/modules/blogs/latest-blog";
import BrandList from "@/modules/brand-list";
import CustomerReviews from "@/modules/customer-reviews";
import OutPricingPlans from "@/modules/our-pricing-plans";
import Teams from "@/modules/teams";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    title: "Home",
  },
};

const HomePage = () => {
  return (
    <MainLayout headerMode="banner">
      <div className="py-8 flex flex-col gap-8">
        <BenefitsProduct />
        <AboutUs />
        <BrandList />
        <Teams />
        <CustomerReviews />
        <OutPricingPlans />
        <LatestBlog />
      </div>
    </MainLayout>
  );
};

export default HomePage;

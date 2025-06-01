import Categories from "@/components/admin/pages/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  openGraph: {
    title: "Categories",
    description: "Admin Categories",
  },
};

const Page = () => {
  return (
    <div>
      <Categories />
    </div>
  );
};

export default Page;

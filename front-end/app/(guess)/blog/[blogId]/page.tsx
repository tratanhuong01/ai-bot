import MainLayout from "@/layout/main-layout";
import { getImageUrl } from "@/lib/utils";
import BlogDetail from "@/modules/blog-detail";
import { blogService } from "@/services/blog.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async (params: any): Promise<Metadata> => {
  const response = await params.params;
  const output = await blogService.getById("slug", response?.blogId ?? "");
  const result = output.data;
  return {
    title: result?.title,
    description: result?.description,
    openGraph: {
      images: {
        url: getImageUrl(result?.thumbnail),
        secureUrl: getImageUrl(result?.thumbnail),
        width: 400,
        height: 650,
        alt: result?.title,
      },
      description: result?.description,
      type: "article",
      tags: result?.tags ?? [],
      url: response?.slug,
    },
  };
};

const BlogPage = async ({ params }: any) => {
  const { blogId } = await params;
  const blog = await blogService.getById("slug", blogId);
  if (!blog?.data) {
    notFound();
  }
  return (
    <MainLayout headerMode="breadcrumbs" title="Blog Details">
      <BlogDetail blog={blog?.data} />
    </MainLayout>
  );
};

export default BlogPage;

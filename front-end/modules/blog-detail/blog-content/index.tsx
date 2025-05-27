import { getImageUrl } from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import { BlogDetailProps } from "..";
import Author from "../author";
import CommentList from "../comment-list";
import FooterContent from "../footer-content";

const BlogContent = ({ blog }: BlogDetailProps) => {
  return (
    <div className="lg:w-2/3 pt-4">
      <div className="w-full relative h-[500px] flex flex-col">
        <Image
          src={getImageUrl(blog?.thumbnail ?? "/images/team.jpg")}
          alt="blog detail"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-white font-bold text-4xl mt-8">{blog?.title}</h1>
      <p className="text-gray-300 min-h-8 text-sm mt-2">
        {moment(blog?.created_at).format("MMMM D, YYYY")}
      </p>
      <p
        className="blog-content text-gray-500 mb-2"
        dangerouslySetInnerHTML={{
          __html: blog?.description ?? "No description available",
        }}
      ></p>
      <hr className="opacity-20 mb-8" />
      <div
        dangerouslySetInnerHTML={{
          __html: blog?.content ?? "<p>No content available</p>",
        }}
        className="blog-content"
      />
      <hr className="border-gray-900 my-8" />

      <FooterContent />
      <Author />
      <CommentList blog={blog} />
    </div>
  );
};

export default BlogContent;

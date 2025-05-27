import { BlogDetailProps } from "..";
import RecentBlog from "./recent-blog";
import SearchBlog from "./search-blog";

const BlogCategory = ({ blog }: BlogDetailProps) => {
  return (
    <div className="bg-[#111618] p-5 lg:w-1/3 flex flex-col gap-4 sticky top-4 mt-4">
      <SearchBlog />
      <RecentBlog blog={blog} />
      <p className="text-xl font-bold mt-4">Tags</p>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {blog?.tags?.map((tag) => (
          <span
            key={tag}
            className="md:p-2 p-1 rounded-sm border border-gray-700 hover:bg-[#7f00ff] cursor-pointer text-sm md:text-base"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;

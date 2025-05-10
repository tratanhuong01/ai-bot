import Image from "next/image";

const BlogContent = () => {
  return (
    <div className="w-2/3">
      <div className="w-full relative h-[500px] flex flex-col">
        <Image
          src="/images/member1.jpg"
          alt="blog detail"
          fill
          className="object-cover"
        />
        <p className="text-gray-400 font-semibold">
          By: Chris OrwigLast Updated: August 28, 20204 Comments
        </p>
      </div>
    </div>
  );
};

export default BlogContent;

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Author from "../author";
import FooterContent from "../footer-content";
import ItemComment from "../item-comment";
import FormComment from "../form-comment";
import { BlogDetailProps } from "..";
import { getImageUrl } from "@/lib/utils";

const BlogContent = ({ blog }: BlogDetailProps) => {
  return (
    <div className="lg:w-2/3">
      <div className="w-full relative h-[500px] flex flex-col">
        <Image
          src={getImageUrl(blog?.thumbnail ?? "/images/team.jpg")}
          alt="blog detail"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 text-gray-400 mt-8">
        <p className="text-gray-400 font-semibold text-xl mb-4">
          By: Chris OrwigLast Updated: August 28, 20204 Comments
        </p>
        <p>
          Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam dolor sit amet, consectetur adipisicing.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <div className="bg-[#0C1923] py-4 my-4">
          <div className="border-l-4 border-[#7F00FF] py-4 px-10 font-semibold text-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <p>
          Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam dolor sit amet, consectetur adipisicing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        {[1, 2, 3].map((_) => (
          <div key={_} className="relative">
            <div style={{ paddingTop: "100%" }}>
              <Image
                src="https://ainext-react.vercel.app/assets/insta-1-CVIciDBH.jpg"
                alt="blog detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-2xl font-semibold text-white">
        Four major elements that we offer:
      </p>

      <p className="text-2xl font-semibold text-white">
        Setting the mood with incense
      </p>
      <ul className="my-8 flex flex-col gap-4">
        <li className="flex gap-2 items-center">
          <CheckIcon color="#7f00ff" size={16} />
          Scientific skills for getting a better result
        </li>
        <li className="flex gap-2 items-center">
          <CheckIcon color="#7f00ff" size={16} />
          Scientific skills for getting a better result
        </li>
        <li className="flex gap-2 items-center">
          <CheckIcon color="#7f00ff" size={16} />
          Scientific skills for getting a better result
        </li>
        <li className="flex gap-2 items-center">
          <CheckIcon color="#7f00ff" size={16} />
          Scientific skills for getting a better result
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem.
      </p>
      <p className="text-2xl font-semibold text-white">
        The rise of marketing and why you need it
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </p>
      <hr className="border-gray-900 my-8" />

      <FooterContent />
      <Author />
      <p className="text-xl font-bold text-white mt-8">2 Comments:</p>
      <div className="flex flex-col gap-8 mt-8">
        <ItemComment />
      </div>
      <FormComment />
    </div>
  );
};

export default BlogContent;

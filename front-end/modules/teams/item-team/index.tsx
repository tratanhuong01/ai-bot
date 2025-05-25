import { User } from "@/interfaces/user.interface";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ItemTeamProps = {
  member?: User;
};

const ItemTeam = ({ member }: ItemTeamProps) => {
  return (
    <div className="relative overflow-hidden rounded-sm cursor-pointer">
      <div style={{ paddingTop: "100%" }}>
        <Image
          src={getImageUrl(member?.avatar ?? "")}
          alt="team"
          className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-all duration-300"
          fill
        />
        <div className="absolute bottom-4 left-4 flex flex-col">
          <p className="text-xl font-semibold hover:border-b hover:border-white border-transparent border-b-2 transition-all duration-200 line-clamp-1">
            {member?.fullname ?? "John Doe"}
          </p>
          <p className="text-gray-300 my-1">
            {member?.title ?? "Web Developer"}
          </p>
          <div className="flex flex-row gap-2">
            <Link
              href="/"
              className="w-7 h-7 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
            >
              <span className="bx bxl-facebook" />
            </Link>
            <Link
              href="/"
              className="w-7 h-7 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
            >
              <span className="bx bxl-instagram" />
            </Link>
            <Link
              href="/"
              className="w-7 h-7 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
            >
              <span className="bx bxl-linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTeam;

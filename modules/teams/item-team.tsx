import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemTeam = () => {
  return (
    <div className="relative overflow-hidden rounded-sm">
      <div style={{ paddingTop: "100%" }}>
        <Image
          src="/images/member1.jpg"
          alt="team"
          className="w-full h-full object-cover rounded-lg"
          fill
        />
        <div className="absolute bottom-4 left-4 flex flex-col gap">
          <p className="text-2xl font-semibold hover:border-b hover:border-white border-transparent border-b-2 transition-all duration-200">
            Christian Haol
          </p>
          <p className="text-gray-300">Web Developer</p>
          <div className="flex flex-row gap-2 mt-2">
            <Link
              href="/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
            >
              <span className="bx bxl-facebook" />
            </Link>
            <Link
              href="/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
             rounded-sm flex justify-center items-center"
            >
              <span className="bx bxl-instagram" />
            </Link>
            <Link
              href="/"
              className="w-9 h-9 bg-black text-white hover:bg-[#871CFF] 
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

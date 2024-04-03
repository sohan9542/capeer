import React from "react";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";
const Navtop = () => {
  return (
    <div className="bg-black  w-full py-2 flex  items-center justify-center flex-col lg:flex-row divide-x">
      <p className=" font-medium text-white text-[13px] pr-3">
        We compare the best trading journals in 2024{" "}
      </p>
      <Link
      href={'/trading-journal-comparisons'}
        className=" font-medium text-white text-[13px] group relative pl-3 flex items-center"
      >
        Read more
        <div className="transition group-hover:translate-x-1">
        <MdArrowRight className="w-5 h-5"/>
        </div>
      
      </Link>
    </div>
  );
};



export default Navtop;

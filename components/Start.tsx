import React from "react";
import Image from "next/image";
const Start = () => {
  return (
    <div className="w-full lg:mb-[140px]">
      <div className="lg:max-w-[1224px] rounded-[30px] gr mx-auto">
        <div className="p-5 grid items-center grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="lg:pl-[40px]">
            <h1 className="text-[#2A2343] text-[36px] leading-[40px] lg:text-[48px] lg:leading-[56px]">
              Start earning today <br /> with CaPeerBara!
            </h1>
            <button className="bg-[#7B76FF] mt-[20px] border border-[#7B76FF] rounded-[12px] px-[28px] py-[16px] font-[600] text-[14px] lg:text-[18px] text-white">
              Start trading
            </button>
          </div>
          <div className="w-full lg:pl-[30px] lg:h-[464px]">
          <Image width={1307} height={1307} className="object-cover rounded-[8px] w-full h-full" alt="" src={"/hero.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

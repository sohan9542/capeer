import React from "react";
import Image from "next/image";
import { PRIVACY_FEATURES } from "@/lib/features";

const Care = () => {
  return (
    <div className="py-[100px] w-full">
      <div className="lg:max-w-[1224px] mx-auto">
        <h1 className="text-[40px] leading-[46px] lg:text-[48px] font-[600] text-[#2A2343]">
          CaPeerBara. We care about your privacy!
        </h1>
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-4">
          {PRIVACY_FEATURES.map((feature) => (
            <div key={`${feature.title}-${feature.description}`}>
              <div className="w-[64px]">
                <Image
                  width={207}
                  height={107}
                  className="object-cover"
                  alt=""
                  src={feature.iconSrc}
                />
              </div>
              <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
                {feature.title}
              </p>
              <p className="text-[#6A7489] text-[16px] font-[400]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Care;

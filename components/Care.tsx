import React from "react";
import Image from "next/image";
const Care = () => {
  return (
    <div className="py-[100px] w-full">
      <div className="lg:max-w-[1224px] mx-auto">
        <h1 className="text-[40px] leading-[46px] lg:text-[48px] font-[600] text-[#2A2343]">
          CaPeerBara. We care about your privacy!
        </h1>
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-4">
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              Non-custody solution
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              You control the keys to the funds in escrow.
            </p>
          </div>
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              Decentralized
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              You control the keys to the funds in escrow.
            </p>
          </div>
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              On chain
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              Security, transparency, and immutability.
            </p>
          </div>
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              Anonymous
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              No verification required.
            </p>
          </div>
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              API of banks
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              Presenting conection to API of banks.
            </p>
          </div>
          <div>
            <div className="w-[64px]">
              <Image
                width={207}
                height={107}
                className="object-cover"
                alt=""
                src={"/lock.svg"}
              />
            </div>
            <p className="text-[#2A2343] pt-2 text-[24px] font-semibold ">
              On chain
            </p>
            <p className="text-[#6A7489] text-[16px] font-[400]">
              Security, transparency, and immutability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;

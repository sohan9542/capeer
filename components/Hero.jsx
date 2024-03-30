import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full py-[100px]">
      <div className="lg:max-w-[1224px] mx-auto">
        <div className="w-full grid grid-cols-1 items-center lg:grid-cols-2 gap-[50px]">
          <div>
            <h1 className="text-[#2A2343] text-[40px] leading-[46px]  lg:text-[56px] lg:leading-[72px] font-bold ">
              The most efficient <br /> P2P platform
            </h1>
            <p className="text-[#4A576A] text-[24px] py-[20px]">
              Secure and seamless and fast P2P transaction
            </p>
            <button className="bg-[#7B76FF] mt-[20px] border border-[#7B76FF] rounded-[12px] px-[28px] py-[16px] font-[600] text-[18px] text-white">
              Start trading
            </button>
            <div className="grid mt-[40px] lg:mt-[60px] grid-cols-1 lg:grid-cols-3 gap-5">
              <div>
                <p className="text-[#615CFF] font-[500] text-[24px]">
                  $38 billion
                </p>
                <p className="text-[#6A7489] font-[500] text-[16px] mt-1">
                  24H trading volume
                </p>
              </div>
              <div>
                <p className="text-[#615CFF] font-[500] text-[24px]">350+</p>
                <p className="text-[#6A7489] font-[500] text-[16px] mt-1">
                  Cryptocurrencies listed
                </p>
              </div>
              <div>
                <p className="text-[#615CFF] font-[500] text-[24px]">
                  140 million
                </p>
                <p className="text-[#6A7489] font-[500] text-[16px] mt-1">
                  Users per day
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:h-[500px]">
          <Image width={1307} height={1307} className="object-cover w-full h-full" alt="" src={"/hero.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

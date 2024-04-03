import React from "react";
import Image from "next/image";
const Company = () => {
  return (
    <div className="w-full py-[20px] bg-[#F0F2F5] ">
      <div className="lg:max-w-[1224px] mx-auto">
        <div className="grid grid-cols-2 p-3 lg:p-0 lg:grid-cols-6 gap-4">
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
          <div className="w-full h-[50px]">
            <Image
              width={207}
              height={107}
              className="object-cover w-full h-full "
              alt=""
              src={"/sepa.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

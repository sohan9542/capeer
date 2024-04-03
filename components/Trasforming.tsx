import React, { useState } from "react";
import Image from "next/image";
const Trasforming = () => {
  const [active, setActive] = useState<number>(2);
  const stringList: string[] = [
    "  Connect",
    "  Amount",
    "Send money",
    " Verification",
    "  Claim crypto",
  ];

  return (
    <div className="py-[50px] lg:py-[150px] bg-[#151E2E] w-full">
      <div className="lg:max-w-[1224px] mx-auto">
        <div className=" grid grid-cols-1 gap-5 lg:gap-0 px-5 lg:px-0 items-center lg:grid-cols-2 ">
          <div className="lg:pr-[80px]">
            <div className="w-full lg:h-[440px]">
              <Image
                width={1307}
                height={1307}
                className="object-cover w-full h-full"
                alt=""
                src={"/hero.jpg"}
              />
            </div>
          </div>
          <div>
            <p className="text-[#7B76FF] text-[24px] font-[500]">
              How it works?
            </p>
            <h1 className="text-[#fff] text-[40px] leading-[44px] lg:text-[48px]  font-semibold lg:leading-[64px]">
              Transforming Digital <br /> Assets with Innovation!
            </h1>
            <div className="my-[20px] border border-[#3A465A] flex-wrap flex items-center p-[15px] lg:p-[5px] rounded-[12px]">


              {stringList.map((item, ind) => (
                <button
                onClick={()=>setActive(ind)}
                  className={
                    active === ind
                      ? "text-white text-[14px] px-[16px] lg:px-[24px] py-[10px] bg-[#7B76FF] rounded-[8px]"
                      : "text-white text-[14px] px-[16px] lg:px-[24px] py-[10px] rounded-[8px]"
                  }
                >
                 {item}
                </button>
              ))}
            </div>
            <h1 className="text-[24px] text-[#A4A1FF] pt-2 font-[500] ">
              Lorem ipsum dolor{" "}
            </h1>
            <p className="mt-2 text-[16px] text-[#98A2B2]">
              Lorem ipsum dolor sit amet consectetur. Neque sed aliquam commodo
              pellentesque turpis vel vulputate. Amet mauris odio nam eu neque
              volutpat egestas at ultrices. Ipsum nibh id tincidunt euismod
              aliquam imperdiet sed quisque aliquet. In sit maecenas diam tempus
              sed ullamcorper turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trasforming;

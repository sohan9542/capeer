import React, { useState } from "react";
import Image from "next/image";
import { FAQ_ITEMS, toggleFaqIndex } from "@/lib/faq";

const Faq = () => {
  const [active, setActive] = useState<number>(2);

  return (
    <div className="py-[50px] lg:py-[150px] w-full">
      <div className="lg:max-w-[1224px] mx-auto">
        <h1 className="text-[#2A2343] pb-10 text-[40px] leading-[44px] lg:text-[48px] font-[600] text-center">
          Questions? Look here.
        </h1>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = active === item.id;
          const isLast = index === FAQ_ITEMS.length - 1;

          return (
            <div
              key={item.id}
              onClick={() => setActive(toggleFaqIndex(active, item.id))}
              className={` border-t cursor-pointer py-[15px]  ${
                isLast ? "border-b" : ""
              }`}
            >
              <div className="flex items-center  justify-between">
                <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
                  {item.question}
                </p>
                {isOpen ? (
                  <div className="w-[29px] cursor-pointer">
                    <Image
                      width={207}
                      height={107}
                      className="object-cover"
                      alt=""
                      src={"/minus.svg"}
                    />
                  </div>
                ) : (
                  <div className="w-[29px] cursor-pointer">
                    <Image
                      width={207}
                      height={107}
                      className="object-cover"
                      alt=""
                      src={"/plus.svg"}
                    />
                  </div>
                )}
              </div>
              {isOpen && (
                <>
                  <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                    {item.answer}
                  </p>
                  {item.links.map((link, linkIndex) => (
                    <div
                      key={link}
                      className={
                        linkIndex === 0
                          ? "flex cursor-pointer"
                          : "flex cursor-pointer py-2"
                      }
                    >
                      <p className="text-[#6A7489] text-[16px] border-b">
                        {link}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

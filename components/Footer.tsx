import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_BUY_LINKS,
  FOOTER_SELL_LINKS,
  SOCIAL_LINKS,
} from "@/lib/navigation";

const Footer = () => {
  return (
    <div className=" mt-[50px]  bg-[#F7F8F9] lg:mt-[60px] lg:pt-[100px] w-full ">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid pb-[50px] px-5 lg:px-0  grid-cols-1 lg:grid-cols-4 gap-[30px]">
          <div>
            <Link href="/" className="flex items-center gap-[5px]">
              <div className="w-[136px]">
                <Image width={137} height={137} alt="" src={"/flogo.svg"} />
              </div>
            </Link>
          </div>
          <div className=" lg:col-span-3 grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[14px] text-[#98A2B2] pb-2">Buy Crypto</p>
              {FOOTER_BUY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.badge
                      ? "text-[16px] flex items-center gap-3 font-[600] text-[#6A7489]"
                      : "text-[16px] font-[600] text-[#6A7489]"
                  }
                >
                  {link.label}{" "}
                  {link.badge ? (
                    <div className="px-3 py-[3px] rounded-[23px] font-medium bg-[#EBEBFF] text-[#615CFF] text-[12px]">
                      {link.badge}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[14px] text-[#98A2B2] pb-2">Sell Crypto</p>
              {FOOTER_SELL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.badge
                      ? "text-[16px] flex items-center gap-3 font-[600] text-[#6A7489]"
                      : "text-[16px] font-[600] text-[#6A7489]"
                  }
                >
                  {link.label}{" "}
                  {link.badge ? (
                    <div className="px-3 py-[3px] rounded-[23px] font-medium bg-[#EBEBFF] text-[#615CFF] text-[12px]">
                      {link.badge}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[14px] text-[#98A2B2] pb-2">Company</p>
              <Link
                href={"/about"}
                className="text-[16px] flex items-center gap-3 font-[600] text-[#6A7489]"
              >
                About
              </Link>
            </div>
            <div>
              <button className="bg-[#7B76FF] py-[8px] w-full text-center text-[16px] rounded-[12px] text-white ">
                Start Trading
              </button>
              <div className="mt-[40px] flex items-center justify-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px]">
                      <Image
                        width={137}
                        height={137}
                        alt=""
                        src={social.icon}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F2F5]">
        <div className="max-w-[1280px] p-5 lg:p-0 mx-auto">
          <div className="flex items-center flex-col lg:flex-row gap-5 justify-between  py-8">
            <div className="flex items-center gap-3">
              <Link href={"/legal"} className="text-[14px]  text-[#98A2B2]">
                Legal
              </Link>
              <Link href={"/tems"} className="text-[14px]  text-[#6A7489]">
                Terms & Conditions
              </Link>
              <Link href={"/cookie"} className="text-[14px]  text-[#6A7489]">
                Cookie Policy
              </Link>
            </div>
            <p className="text-[13px] text-[#5E5F6E]">
              © 2024 TradingJournal.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

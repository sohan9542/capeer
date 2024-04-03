import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              <Link
                href={"/buy-bnb"}
                className="text-[16px] flex items-center gap-3 font-[600] text-[#6A7489]"
              >
                Buy BNB{" "}
                <div className="px-3 py-[3px] rounded-[23px] font-medium bg-[#EBEBFF] text-[#615CFF] text-[12px]">
                  New
                </div>
              </Link>
              <Link
                href={"/buy-usdt"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Buy USDT
              </Link>
              <Link
                href={"/buy-ada"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Buy ADA
              </Link>
              <Link
                href={"/buy-matic"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Buy MATIC
              </Link>

              {/* <Link href={'/trading-webull'} className='text-[13px] text-[#131316]'>Stock Trade Tracker</Link>
          <Link href={'/trading-webull'} className='text-[13px] text-[#131316]'>Stock Trading Dashboard</Link> */}
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[14px] text-[#98A2B2] pb-2">Sell Crypto</p>
              <Link
                href={"/sell-bnb"}
                className="text-[16px] flex items-center gap-3 font-[600] text-[#6A7489]"
              >
                Sell BNB{" "}
                <div className="px-3 py-[3px] rounded-[23px] font-medium bg-[#EBEBFF] text-[#615CFF] text-[12px]">
                  New
                </div>
              </Link>
              <Link
                href={"/sell-usdt"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Sell USDT
              </Link>
              <Link
                href={"/sell-ada"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Sell ADA
              </Link>
              <Link
                href={"/sell-matic"}
                className="text-[16px] font-[600] text-[#6A7489]"
              >
                Sell MATIC
              </Link>
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
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px]">
                    <Image
                      width={137}
                      height={137}
                      alt=""
                      src={"/linkedin.svg"}
                    />
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px]">
                    <Image
                      width={137}
                      height={137}
                      alt=""
                      src={"/twitter.svg"}
                    />
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px]">
                    <Image
                      width={137}
                      height={137}
                      alt=""
                      src={"/instagram.svg"}
                    />
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px]">
                    <Image
                      width={137}
                      height={137}
                      alt=""
                      src={"/discord.svg"}
                    />
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px]">
                    <Image
                      width={137}
                      height={137}
                      alt=""
                      src={"/telegram.svg"}
                    />
                  </div>
                </a>
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

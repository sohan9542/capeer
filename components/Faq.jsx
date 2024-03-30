import React, { useState } from "react";
import Image from "next/image";
const Faq = () => {
  const [active, setActive] = useState(2);

  return (
    <div className="py-[50px] lg:py-[150px] w-full">
      <div className="lg:max-w-[1224px] mx-auto">
        <h1 className="text-[#2A2343] pb-10 text-[40px] leading-[44px] lg:text-[48px] font-[600] text-center">
          Questions? Look here.
        </h1>
        <div
          onClick={() => {
            if (active === 1) {
              setActive(0);
            } else {
              setActive(1);
            }
          }}
          className=" border-t cursor-pointer py-[15px]  "
        >
          <div className="flex items-center  justify-between">
            <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
              What products does CaPeerBara provide?
            </p>
            {active === 1 ? (
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
          {active === 1 && (
            <>
              <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                Easily buy Bitcoin within minutes with GBP, EUR, USD or your
                local currency. CaPeerBara supports various popular payment
                methods, including Visa, Mastercard, and ApplePay credit cards.
                To get started, check out our latest guide on how to buy Bitcoin
                on CaPeerBara. Want to buy, sell, or hold other coins that are
                gaining traction in the crypto ecosystem? Check out the
                following free resources to kick-start your journey today:
              </p>
              <div className="flex cursor-pointer">
                <p className="text-[#6A7489] text-[16px] border-b">Buy BTC</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy USDT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy ETH</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy DOT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy SOL</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy Doge</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy XRP</p>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            if (active === 2) {
              setActive(0);
            } else {
              setActive(2);
            }
          }}
          className=" border-t cursor-pointer  py-[15px]  "
        >
          <div className="flex items-center  justify-between">
            <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
            How do I buy Bitcoin on CaPeerBara?
            </p>
            {active === 2 ? (
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
          {active === 2 && (
            <>
              <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                Easily buy Bitcoin within minutes with GBP, EUR, USD or your
                local currency. CaPeerBara supports various popular payment
                methods, including Visa, Mastercard, and ApplePay credit cards.
                To get started, check out our latest guide on how to buy Bitcoin
                on CaPeerBara. Want to buy, sell, or hold other coins that are
                gaining traction in the crypto ecosystem? Check out the
                following free resources to kick-start your journey today:
              </p>
              <div className="flex cursor-pointer">
                <p className="text-[#6A7489] text-[16px] border-b">Buy BTC</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy USDT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy ETH</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy DOT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy SOL</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy Doge</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy XRP</p>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            if (active === 3) {
              setActive(0);
            } else {
              setActive(3);
            }
          }}
          className=" border-t cursor-pointer py-[15px]  "
        >
          <div className="flex items-center  justify-between">
            <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
            Where is CaPeerBara based?
            </p>
            {active === 3 ? (
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
          {active === 3 && (
            <>
              <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                Easily buy Bitcoin within minutes with GBP, EUR, USD or your
                local currency. CaPeerBara supports various popular payment
                methods, including Visa, Mastercard, and ApplePay credit cards.
                To get started, check out our latest guide on how to buy Bitcoin
                on CaPeerBara. Want to buy, sell, or hold other coins that are
                gaining traction in the crypto ecosystem? Check out the
                following free resources to kick-start your journey today:
              </p>
              <div className="flex cursor-pointer">
                <p className="text-[#6A7489] text-[16px] border-b">Buy BTC</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy USDT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy ETH</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy DOT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy SOL</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy Doge</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy XRP</p>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            if (active === 4) {
              setActive(0);
            } else {
              setActive(4);
            }
          }}
          className=" border-t cursor-pointer  py-[15px]  "
        >
          <div className="flex items-center  justify-between">
            <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
            What products does CaPeerBara provide?
            </p>
            {active === 4 ? (
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
          {active === 4 && (
            <>
              <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                Easily buy Bitcoin within minutes with GBP, EUR, USD or your
                local currency. CaPeerBara supports various popular payment
                methods, including Visa, Mastercard, and ApplePay credit cards.
                To get started, check out our latest guide on how to buy Bitcoin
                on CaPeerBara. Want to buy, sell, or hold other coins that are
                gaining traction in the crypto ecosystem? Check out the
                following free resources to kick-start your journey today:
              </p>
              <div className="flex cursor-pointer">
                <p className="text-[#6A7489] text-[16px] border-b">Buy BTC</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy USDT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy ETH</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy DOT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy SOL</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy Doge</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy XRP</p>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            if (active === 5) {
              setActive(0);
            } else {
              setActive(5);
            }
          }}
          className=" border-t cursor-pointer border-b py-[15px]  "
        >
          <div className="flex items-center  justify-between">
            <p className="text-[#2A2343] text-[16px] lg:text-[24px] font-semibold">
            How do I buy Bitcoin on CaPeerBara?
            </p>
            {active === 5 ? (
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
          {active === 5 && (
            <>
              <p className="pb-3 text-[#4A576A] pt-3 text-[16px]">
                Easily buy Bitcoin within minutes with GBP, EUR, USD or your
                local currency. CaPeerBara supports various popular payment
                methods, including Visa, Mastercard, and ApplePay credit cards.
                To get started, check out our latest guide on how to buy Bitcoin
                on CaPeerBara. Want to buy, sell, or hold other coins that are
                gaining traction in the crypto ecosystem? Check out the
                following free resources to kick-start your journey today:
              </p>
              <div className="flex cursor-pointer">
                <p className="text-[#6A7489] text-[16px] border-b">Buy BTC</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy USDT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy ETH</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy DOT</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy SOL</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy Doge</p>
              </div>
              <div className="flex cursor-pointer py-2">
                <p className="text-[#6A7489] text-[16px] border-b">Buy XRP</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;

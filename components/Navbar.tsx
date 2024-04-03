import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,

  XMarkIcon,
} from "@heroicons/react/24/outline";



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <nav className=" border-b py-3 ">
        <div className=" lg:max-w-[1224px] px-5 lg:px-0 w-full flex items-center justify-between mx-auto">
          <div className="flex items-center gap-[45px]">
            <div className="flex lg:flex-1">
              <Link href="/">
                <div className="w-[165px]">
                  <Image width={137} height={137} alt="" src={"/logo.svg"} />
                </div>
              </Link>
            </div>

            <div className=" hidden lg:flex items-center gap-[35px]">
              <Link
                className="text-[14px] text-[#615CFF] font-[600]"
                href="/buy-crypto"
              >
                Buy Crypto
              </Link>
              <Link
                className="text-[14px] text-[#615CFF] font-[600]"
                href="/sell-crypto"
              >
                Sell Crypto
              </Link>
              <Link
                className="text-[14px] text-[#6A7489] font-[600]"
                href="/sell-crypto"
              >
                About
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex  items-center gap-3">
            <button className="bg-[#7B76FF] border border-[#7B76FF] rounded-[12px] px-[16px] py-[10px] font-[600] text-[14px] text-white">
              Start trading
            </button>
            <button className="border-[#6A7489] border flex items-center gap-2 rounded-[12px] px-[16px] py-[10px] font-[600] text-[14px] text-[#6A7489]">
              <div className="w-[19px]">
                <Image width={137} height={137} alt="" src={"/meta.svg"} />
              </div>{" "}
              Connect Metamask
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
            <Link href="/">
                <div className="w-[165px]">
                  <Image width={137} height={137} alt="" src={"/logo.svg"} />
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 flex flex-col  py-6">
          
                <Link
                className="text-[14px] text-[#615CFF] font-[600]"
                href="/buy-crypto"
              >
                Buy Crypto
              </Link>
              <Link
                className="text-[14px] text-[#615CFF] font-[600]"
                href="/sell-crypto"
              >
                Sell Crypto
              </Link>
              <Link
                className="text-[14px] text-[#6A7489] font-[600]"
                href="/sell-crypto"
              >
                About
              </Link>
              </div>
              <div className="flex py-5  items-center gap-3">
            <button className="bg-[#7B76FF] border border-[#7B76FF] rounded-[12px] px-[16px] py-[10px] font-[600] text-[14px] text-white">
              Start trading
            </button>
            <button className="border-[#6A7489] border flex items-center gap-2 rounded-[12px] px-[16px] py-[10px] font-[600] text-[14px] text-[#6A7489]">
              <div className="w-[19px]">
                <Image width={137} height={137} alt="" src={"/meta.svg"} />
              </div>{" "}
              Connect Metamask
            </button>
          </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;

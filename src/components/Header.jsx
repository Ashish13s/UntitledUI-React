import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { FiSidebar } from "react-icons/fi";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { FaShieldAlt } from "react-icons/fa";
import { BiDownArrowCircle } from "react-icons/bi";
import { RxPlus } from "react-icons/rx";
import { RxCopy } from "react-icons/rx";
import { BiExport } from "react-icons/bi";
import { HiLockClosed } from "react-icons/hi";
import { IoIosRefresh } from "react-icons/io";

function Header() {
  return (
    <div className="bg-[#fbfcfa] px-2 py-1 border-b-2 border-black-50">
      <div className="max-w-auto  flex flex-row justify-between mx-none">
        <div className="flex flex-row justify-start ">
          <div className="text-[#ff0000]">
            <RxDotFilled size="1.6rem" />
          </div>
          <div className="text-[#ffff00]">
            <RxDotFilled size="1.6rem" />
          </div>
          <div className="text-[#00ff00]">
            <RxDotFilled size="1.6rem" />
          </div>
          <div className="hidden md:flex ">
            <div className="pl-5">
              <FiSidebar clasName="hidden md" size="1.7rem" />
            </div>
          </div>
          <div className="pl-5">
            <RxCaretLeft size="1.7rem" />
          </div>
          <div>
            <RxCaretRight size="1.7rem" />
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-center">
          <div className="px-4">
            <FaShieldAlt size="1.7rem" />
          </div>
          <div className="flex px-5 border border-black">
            <div className="pl-24 pr-2">
              <HiLockClosed size="1.4rem" />
            </div>
            <div>untitledui.com</div>
            <div className="pl-24">
              <IoIosRefresh size="1.4rem" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="pl-5">
            <BiDownArrowCircle size="1.7rem" />
          </div>
          <div className="hidden md:flex">
            <div className="pl-5">
              <BiExport size="1.7rem" />
            </div>
          </div>
          <div className="pl-5">
            <RxPlus size="1.7rem" />
          </div>
          <div className="pl-5">
            <RxCopy size="1.7rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

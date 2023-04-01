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
    <div className="bg-[#fbfcfa] py-1 border-b-2 border-black-50 items-center">
      <div className="max-w-auto flex flex-row justify-between">
        <div className="flex flex-row justify-between items-center ">
          <div className="text-[#ff0000] text-3xl">
            <RxDotFilled  />
          </div>
          <div className="text-[#ffff00] text-3xl">
            <RxDotFilled  />
          </div>
          <div className="text-[#00ff00] text-3xl">
            <RxDotFilled  />
          </div>
          <div className="hidden md:flex ">
            <div className="pl-3">
              <FiSidebar />
            </div>
          </div>
          <div className="pl-3">
            <RxCaretLeft />
          </div>
          <div>
            <RxCaretRight  />
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="px-4">
            <FaShieldAlt  />
          </div>
          <div className="flex px-5 border items-center border-black">
            <div className="pl-24 pr-2">
              <HiLockClosed />
            </div>
            <div>untitledui.com</div>
            <div className="pl-24">
              <IoIosRefresh  />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="pl-5">
            <BiDownArrowCircle  />
          </div>
          <div className="hidden md:flex">
            <div className="pl-5">
              <BiExport  />
            </div>
          </div>
          <div className="pl-5">
            <RxPlus  />
          </div>
          <div className="pl-5">
            <RxCopy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

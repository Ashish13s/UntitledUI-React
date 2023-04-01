import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineFlag } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CgPassword } from "react-icons/cg";
import { BsStars } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { TbLayoutNavbar } from "react-icons/tb";
import { SiNintendogamecube } from "react-icons/si";

function Menu() {
  return (
    <div className="bg-[#ffffff] h-screen pl-2 py-1 pr-12  hidden md:flex">
      <div className="flex flex-col  min-h-screen justify-start ">
        <div className="flex py-5">
          <div>
            <RxDotFilled size="2rem" />
          </div>
          <div className="text-xl font-semibold">
            <h1>Untitled UI</h1>
          </div>
        </div>
        <div className="flex flex-col font-medium text-lg">
          Settings
          </div>
        <div className="flex flex-col py-5 px-3">

          <div className="flex  border border-black-50 rounded-md p-2">
            <div>
              <RiSearchLine size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Search</div>
          </div>

          <div className="flex p-2">
            <div>
              <AiOutlineFlag size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">My details</div>
          </div>

          <div className="flex p-2">
            <div>
              <CgProfile size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Profile</div>
          </div>

          <div className="flex p-2">
            <div>
              <CgPassword size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Password</div>
          </div>

          <div className="flex p-2">
            <div>
              <BsStars size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Appearance</div>
          </div>

          <div className="flex p-2">
            <div>
              <BiGroup size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Team</div>
          </div>

          <div className="flex p-2">
            <div>
              <HiOutlineCreditCard size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Billing</div>
          </div>

          <div className="flex p-2">
            <div>
              <TbLayoutNavbar size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">Applications</div>
          </div>

          <div className="flex p-2">
            <div>
              <SiNintendogamecube size="1.4rem" />
            </div>
            <div className="pl-3 pr-20">API</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;

import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
// import { } from 'react-icons/';
import { BiGroup } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="h-screen  px-2 py-1 border-r-2 border-black-50 hidden md:flex ">
      <div className="flex flex-col justify-start ">
        <div className="flex flex-col justify-start ">
          <div className="flex flex-col py-10">
            <BsPlusSquare size="1.7rem" />
          </div>
          {/*div1*/}

          <div className="flex flex-col pb-5 ">
            <div className="py-1">
              <RiHome6Line size="1.7rem" />
            </div>
            <div className="py-1">
              <BiLinkExternal size="1.7rem" />
            </div>
            <div className="py-1">
              <BsLayers size="1.7rem" />
            </div>
            <div className="py-1">
              <RiCheckboxMultipleLine size="1.7rem" />
            </div>
            <div className="py-1">
              <BiBarChartAlt2 size="1.7rem" />
            </div>
            <div className="py-1">
              <BiGroup size="1.7rem" />
            </div>
            <div className="py-1">
              <CiSettings size="1.7rem" />
            </div>
          </div>
        </div>
        {/*div2*/}
        <div className="flex flex-col justify-end ">
          <div className="flex flex-col pl-1 pb-5">
            <div className="py-1">
              <BsPlusSquare size="1.3rem" />
            </div>
            <div className="py-1 text-[#800080]">
              <RxDotFilled size="1.3rem" />
            </div>
            <div className="py-1 text-[#00008b]">
              <RxDotFilled size="1.3rem" />
            </div>
            <div className="py-1 text-[#006400]">
              <RxDotFilled size="1.3rem" />
            </div>
            <div className="py-1 text-[#e71480]">
              <RxDotFilled size="1.3rem" />
            </div>
            <div className="py-1 text-[#000000]">
              <RxDotFilled size="1.3rem" />
            </div>
            </div>
            {/*div3*/}
            <div className="flex flex-col pb-5 justify">
              <CgProfile size="2rem" />
            </div>
          </div>
          {/*div4*/}
      </div>
    </div>
  );
}

export default Sidebar;

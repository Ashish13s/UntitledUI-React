import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BiGroup } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="h-screen px-2 py-1 hidden md:flex ">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-start">
          <div className="flex flex-col justify-between py-10">
          <button><BsPlusSquare size="1.7rem" /></button>
          </div>
          {/*div1*/}

          <div className="flex flex-col justify-betweenpb-5 ">
            <div className="py-1">
              <button><RiHome6Line size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><BiLinkExternal size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><BsLayers size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><RiCheckboxMultipleLine size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><BiBarChartAlt2 size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><BiGroup size="1.7rem" /></button>
            </div>
            <div className="py-1">
            <button><CiSettings size="1.7rem" /></button>
            </div>
        </div>
        </div>
        {/*div2*/}
        <div className="flex flex-col justify-end ">
        <div className="flex flex-col justify-end ">
          <div className="flex flex-col pl-1 pb-5">
            <div className="py-1">
            <button><BsPlusSquare size="1.3rem" /></button>
            </div>
            <div className="py-1 text-[#800080]">
            <button><RxDotFilled size="1.3rem" /></button>
            </div>
            <div className="py-1 text-[#00008b]">
            <button><RxDotFilled size="1.3rem" /></button>
            </div>
            <div className="py-1 text-[#006400]">
            <button><RxDotFilled size="1.3rem" /></button>
            </div>
            <div className="py-1 text-[#e71480]">
            <button><RxDotFilled size="1.3rem" /></button>
            </div>
            <div className="py-1 text-[#000000]">
            <button><RxDotFilled size="1.3rem" /></button>
            </div>
            </div>
            {/*div3*/}
            <div className="flex flex-col pb-5 justify">
            <button><CgProfile size="2rem" /></button>
            </div>
          </div>
          </div>
          {/*div4*/}
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";
import { RxDotFilled } from "react-icons/rx";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Settings() {
  return (
    <div className="bg-[#ffffff] last:h-screen md:border-t-2 md:border-l-2 md:rounded-tl-3xl">
      <div className="flex flex-col justify-start py-5">
        <div className="flex flex-row pb-3">
          <div className="">
            <RxDotFilled size="2rem" />
          </div>
          <div className="text-2xl font-bold">Settings</div>
        </div>
        <div className="flex flex-row justify-between py-5">
          <div className="px-5">
            <div
              className="text-m 
           font-semibold pb-1"
            >
              Appearacnce
            </div>
            <div className="text-sm font-light ">
              Change how United UI looks and feels in your browser.
            </div>
          </div>
          <div className="hidden md:flex ">
            <button>
              <BiDotsVerticalRounded />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between py-5">
          <div className="px-5 md:flex flex-col ">
            <div
              className="text-m 
            font-semibold"
            >
              Interface theme
            </div>
            <div className="text-sm font-light pb-3">
              Select or customize your UI theme.
            </div>
            <div className="md:hidden flex flex-row overflow-hidden">
            <div className="flex flex-col px-2 ">
            <div >
                <img className="border-4 border-[#658af8] rounded-xl "  src={require('./Images/System.webp')} width={120}></img>
                </div>
              <p className="">System preference</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 rounded-xl "  src={require('./Images/light.webp')} width={120}></img>
                </div>
              <p className="px-5">Light</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 border-gray-900 rounded-xl "  src={require('./Images/dark.webp')} width={120}></img>
                </div>
              <p className="px-5">Dark</p>
            </div>
          </div>
          </div>
          <div className="hidden md:flex flex-row ">
            <div className="flex flex-col px-2 overflow-hidden">
            <div >
                <img className="border-4 border-[#658af8] rounded-xl "  src={require('./Images/System.webp')} width={180}></img>
                </div>
              <p className="px-5">System preference</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 rounded-xl "  src={require('./Images/light.webp')} width={180}></img>
                </div>
              <p className="px-5">Light</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 border-gray-900 rounded-xl "  src={require('./Images/dark.webp')} width={180}></img>
                </div>
              <p className="px-5">Dark</p>
            </div>
          </div>
          </div>
        <hr />
        <div className="flex flex-col gap-x-10 py-5">
          <div className="flex flex-row justify-start space-x-28 px-5">
          <div
            className="text-m 
           font-semibold"
          >
            Transparent sidebar
          </div>
          <div>
          <button>
            <Toggle />
          </button>
          </div>
          </div>
          <div className="px-5 text-sm font-light">
            Make the desktop sidebar transparent
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between py-5">
          <div className="px-5">
          <div
            className="text-m 
           font-semibold"
          >
            Sidbar feature
          </div>
          <div className="text-sm pb-3 font-light">
            What shows in the desktop sidebar.
          </div>
          <div className="md:hidden flex flex-row flex-wrap">
          <button>
              <Dropdown />
          </button>
          </div>
          </div>
          <div className="hidden md:flex flex-row flex-wrap">
          <button>
              <Dropdown />
          </button>
          </div>
        </div>
        <hr />
          <div className="flex flex-row justify-between py-5">
          <div className="px-5 md:flex flex-col">
            <div
              className="text-m 
            font-semibold"
            >
              Tablets view
            </div>
            <div className="text-sm pb-3 font-light">
            How are tablets displayed in the app.
            </div>
            <div className="md:hidden flex flex-row overflow-hidden">
            <div className="flex flex-col px-2 ">
            <div >
                <img className="border-4 border-[#658af8] rounded-xl "  src={require('./Images/compact.webp')} width={120}></img>
                </div>
              <p className="px-5">Default</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 rounded-xl "  src={require('./Images/compact.webp')} width={120}></img>
                </div>
              <p className="px-5">Compact</p>
            </div>
          </div>
          </div>
          <div className="hidden md:flex flex-row overflow-hidden">
            <div className="flex flex-col px-2 ">
            <div >
                <img className="border-4 border-[#658af8] rounded-xl "  src={require('./Images/compact.webp')} width={180}></img>
                </div>
              <p className="px-5">Default</p>
            </div>
            <div className="flex flex-col px-2">
            <div >
                <img className="border-4 rounded-xl "  src={require('./Images/compact.webp')} width={180}></img>
                </div>
              <p className="px-5">Compact</p>
            </div>
          </div>
          </div>
        <hr />
        <div className="flex flex-row justify-end gap-3  p-3">
          <div className="bg-[#ffffff] border-2 border-black-50 rounded-lg ">
            <button className="px-3 py-2 text-center text-black">Cancel</button>
          </div>
          <div className="bg-[#2f5ee9] border-2 border-black-50 rounded-lg">
            <button className="px-3 py-2 text-center text-white">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

import React from "react";
import PlugIcon from "../../icons/PlugIcon";
import PenIcon from "../../icons/PenIcon";
import CloudList from "./leftNavbarComponents/CloudList";
import ArrowIcon from "../../icons/ArrowIcon";

export default function LeftNavbar() {
  return (
    <div>
      {/* section one >> company name and logo here */}
      <div className="h-14  flex flex-row justify-between pl-[20px] pr-[18px] py-[40px] ">
        <div className="flex flex-row justify-between grow items-center h-full">
          <span>
            <img
              src="/logo/bearishLogo/logo.png"
              alt="logo"
              height={30}
              width={30}
            />
          </span>
          <span className="w-10 h-10 bg-white bg-no-repeat border border-[#E9EDF2] rounded-lg opacity-100" />
          <span className="h-5 opacity-100 text-base">
            Company Name
          </span>
        </div>
        <div className="pl-3 flex items-center ">
          <span style={{ transform: "rotate(90deg)" }}>
            <ArrowIcon />
          </span>
        </div>
      </div>
      {/* section one end here */}

      {/* section two >> create new button here */}
      <div
        className="pl-[20px] pr-[18px] pb-6"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          className="flex flex-row items-center w-32 h-9 text-white"
          style={{
            background: "#A53A01 0% 0% no-repeat padding-box",
            boxShadow: "0pt 6pt 6pt #00767B29",
            border: "1pt solid #E9EDF2",
            borderRadius: "5pt",
            opacity: 1,
          }}
        >
          <span className="px-1">
            <PenIcon />
          </span>
          <span>Create New</span>
        </button>

        <span style={{ transform: "rotate(45deg)" }}>
          <PlugIcon />
        </span>
      </div>
      {/* section two end here */}
      <div className="pl-[20px] ">
        <div className="flex flex-row">
          <div className="font-semibold py-2 ">Cloud Storage</div>
          <div className="grow items-center justify-end flex">
            <div className="h-[1px] w-[120px] bg-[#E9EDF2]" />
          </div>
        </div>
        <div className=" pr-2" >
          <CloudList />
        </div>
        <div className="flex flex-row gap-2 py-4 pl-2">
          <span
            className="relative bottom-1 cursor-pointer "
            style={{ transform: "rotate(180deg)" }}
          >
            <ArrowIcon />
          </span>
          <span className="font-medium text-xs cursor-pointer">View More</span>
        </div>
      </div>

      <div className="pl-[20px]">
        <div className="flex flex-row">
          <div className="font-semibold py-2 ">Shared</div>
          <div className="grow items-center justify-end flex">
            <div className="h-[1px] w-[130px] bg-[#E9EDF2]" />
          </div>
        </div>
      </div>
    </div>
  );
}

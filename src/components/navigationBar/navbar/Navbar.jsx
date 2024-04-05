import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center h-full pl-2 pr-2 bg-white">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="font-semibold text-[15px]">Cloudstorage</div>
        <div className="border-l-2 border-l-[#E9EDF2] pl-6" >
          <div
            style={{
              boxShadow:
                "0px 3px 6px rgba(0, 0, 0, 0.29), inset 0px 3px 6px rgba(0, 0, 0, 0.29)",
            }}
            className="border font-semibold rounded-full w-[40px] h-[40px] flex justify-center items-center"
          >
            <span>TU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

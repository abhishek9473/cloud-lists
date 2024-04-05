import React from "react";
import MoreIcon from "../../../icons/MoreIcon";
import UseIndicator from "../../../constant/UseIndicator";
import ArrowIcon from "../../../icons/ArrowIcon";

export default function StorageList() {
  // assume this data are fetched by api
  const cloudList = [
    {
      cloudIconSrc: "/logo/googleDriveLogo/logo.png",
      cloudName: "Google Drive",
      totalFiles: 100,
      totalStorage: 15,
      usedStoare: 10,
      preferedColor: "rgba(255, 167, 0)",
    },
    {
      cloudIconSrc: "/logo/dropboxLogo/logo.png",
      cloudName: "Dropbox",
      totalFiles: 100,
      totalStorage: 15,
      usedStoare: 10,
      preferedColor: "rgba(0, 8, 198)",
    },
    {
      cloudIconSrc: "/logo/boxLogo/logo.png",
      cloudName: "Box",
      totalFiles: 100,
      totalStorage: 20,
      usedStoare: 6,
      preferedColor: "rgba(8, 90, 21)",
    },
  ];

  return (
    <div className="pb-[9px]">
      <div className="pt-4 pb-5 font-semibold text-[15px] ">
        My Cloud Storages
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex w-[95%] " >
          {cloudList?.map((item, i) => (
            <div
              key={i}
              className="w-1/3 h-[150px] rounded bg-white mr-4 pl-[15px] pt-[15px] pr-[10px] "
              style={{ boxShadow: "0px 3px 6px #00000029" }}
            >
              <div className="flex flex-row justify-between">
                <span>
                  <img
                    src={item.cloudIconSrc}
                    alt={item.cloudName}
                    width={30}
                    height={30}
                  />
                </span>
                <span className="flex items-center">
                  <MoreIcon />
                </span>
              </div>
              <div className="mt-[10px] flex flex-row justify-between">
                {/* <span className="font-semibold text-[13px]"> */}
                <span
                  style={{
                    font: "normal normal 600 14px/17px Source Serif Pro",
                  }}
                >
                  {item.cloudName}
                </span>
                <span className="text-[11px] font-light">
                  {item.totalFiles} files
                </span>
              </div>
              <div className="mt-[20px] text-[11px] pb-2 ">
                {item.usedStoare} GB of {item.totalStorage} GB Used
              </div>
              <div>
                <UseIndicator
                  bgcolor={item.preferedColor}
                  totalStorage={item.totalStorage}
                  usedStorage={item.usedStoare}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black w-[30px] flex justify-center rounded ">
          <span className="flex items-center rotate-90 ">
            <ArrowIcon fillcolor={"#ffffff"} />
          </span>
        </div>
      </div>
    </div>
  );
}

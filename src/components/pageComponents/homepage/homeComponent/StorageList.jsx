import React from "react";
import MoreIcon from "../../../icons/MoreIcon";
import UseIndicator from "../../../constant/UseIndicator";

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
    <div>
      <div>My Cloud Storages</div>
      <div className="flex flex-row">
        {cloudList?.map((item, i) => (
          <div
            key={i}
            className="w-[225px] h-[150px] mr-4 pl-[15px] pt-[15px] pr-[10px] "
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
              <span className="font-semibold text-[13px]">
                {item.cloudName}
              </span>
              <span className="text-[11px] font-light">
                {item.totalFiles} files
              </span>
            </div>
            <div className="mt-[20px]">
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
    </div>
  );
}

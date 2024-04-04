import React from "react";
import SettingIcon from "../../../icons/SettingIcon";

export default function CloudList() {
  // assume this list are fetch with api
  const cloudList = [
    {
      logoSrc: "/logo/bearishLogo/logo.png",
      cloudName: "Bearish OS",
    },
    {
      logoSrc: "/logo/googleDriveLogo/logo.png",
      cloudName: "Google Drive",
    },
    {
      logoSrc: "/logo/dropboxLogo/logo.png",
      cloudName: "Dropbox",
    },
  ];

  return (
    <>
      <div>
        {cloudList?.map((item, i) => (
          <div key={i} className="flex flex-row justify-between py-2">
            <div className="flex flex-row gap-2">
              <img src={item.logoSrc} height={20} width={22} />
              <span className="font-normal text-sm leading-normal font-serif">
                {item.cloudName}
              </span>
            </div>
            <div>
              <SettingIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

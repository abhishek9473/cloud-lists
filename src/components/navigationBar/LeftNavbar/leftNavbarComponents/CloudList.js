import React from "react";

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

  return <div>CloudList</div>;
}

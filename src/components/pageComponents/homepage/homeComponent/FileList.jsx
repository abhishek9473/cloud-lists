import React from "react";

import CategoryIcon from "../../../icons/CategoryIcon";
import DocsIcon from "../../../icons/DocsIcon";
import FileIcon from "../../../icons/FileIcon";
import ListIcon from "../../../icons/ListIcon";
import Mp3Icon from "../../../icons/Mp3Icon";
import Mp4Icon from "../../../icons/Mp4Icon";
import PdfIcon from "../../../icons/PdfIcon";
import PngIcon from "../../../icons/PngIcon";
import PptIcon from "../../../icons/PptIcon";
import SettingIcon from "../../../icons/SettingIcon";
import XlsIcon from "../../../icons/XlsIcon";
import MoreIcon from "../../../icons/MoreIcon";

export default function FileList() {
  const filesList = [
    {
      fileId: 1,
      fileType: "doc",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
    {
      fileId: 2,
      fileType: "xls",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
    {
      fileId: 3,
      fileType: "ppt",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
    {
      fileId: 4,
      fileType: "png",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
    {
      fileId: 5,
      fileType: "png",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
    {
      fileId: 6,
      fileType: "mp3",
      fileName: "Name of the file",
      fileOwnerImg: "/images/profile.png",
      fileOwnerName: "First Last Name",
      LastOpened: 6,
    },
  ];

  const fileTypes = [
    {
      id: 1,
      fileType: "xls",
      fileIcon: <XlsIcon />,
    },
    {
      id: 2,
      fileType: "doc",
      fileIcon: <DocsIcon />,
    },
    {
      id: 3,
      fileType: "ppt",
      fileIcon: <PptIcon />,
    },
    {
      id: 4,
      fileType: "pdf",
      fileIcon: <PdfIcon />,
    },
    {
      id: 5,
      fileType: "mp4",
      fileIcon: <Mp4Icon />,
    },
    {
      id: 6,
      fileType: "mp3",
      fileIcon: <Mp3Icon />,
    },
    {
      id: 7,
      fileType: "png",
      fileIcon: <PngIcon />,
    },
  ];

  return (
    <div className="pb-[4rem]">
      <div className="h-[25px] flex flex-row justify-between">
        <span className="flex flex-row gap-2 items-center ">
          <span>
            <FileIcon />
          </span>
          <span className="font-semibold text-lg">Files</span>
          <span className="flex flex-row gap-1 ml-[3.5rem]">
            {fileTypes?.map((item) => (
              <span>{React.cloneElement(item.fileIcon)}</span>
            ))}
          </span>
        </span>
        <span className="flex flex-row items-end gap-4">
          <span className="border-b-2 border-b-red-900">
            <CategoryIcon />
          </span>
          <span>
            <ListIcon />
          </span>
          <span className="text-blue-600 underline text-sm">
            Show all items
          </span>
        </span>
      </div>

      {/* all files list */}
      <div>
        <div className="flex flex-row justify-between py-3 pr-4 font-semibold text-[11px]">
          <span>Name</span>
          <span className="relative left-8">Owner</span>
          <span className="relative left-10">Last Opened</span>
          <span>
            <SettingIcon />{" "}
          </span>
        </div>
        <div>
          {filesList?.map((item) => {
            // Find the corresponding file icon based on fileType
            const fileTypeIcon = fileTypes.find(
              (type) => type.fileType === item.fileType
            )?.fileIcon;

            return (
              <div
                key={item.fileId}
                className="flex flex-row justify-between bg-white mb-[1px] items-center py-2 px-3 font-semibold text-[13px]"
              >
                <span className="flex flex-row items-center gap-2">
                  <span>
                    {<span>{React.cloneElement(fileTypeIcon)}</span>}
                    {/* <DocsIcon /> */}
                  </span>
                  <span>{item.fileName}</span>
                </span>
                <span className="flex flex-row items-center gap-2">
                  <span className="w-[25px] h-[25px]">
                    <img src={item.fileOwnerImg} alt="profile img" />
                  </span>
                  <span>{item.fileOwnerName}</span>
                </span>
                <span className="flex flex-row items-center">
                  {item.LastOpened} days ago{" "}
                </span>
                <span className="flex flex-row items-center">
                  <MoreIcon />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

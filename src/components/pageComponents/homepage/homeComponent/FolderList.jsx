import React from "react";
import FolderOutlineIcon from "../../../icons/FolderOutlineIcon";
import CategoryIcon from "../../../icons/CategoryIcon";
import ListIcon from "../../../icons/ListIcon";
import ArrowIcon from "../../../icons/ArrowIcon";
import FolderFilledIcon from "../../../icons/FolderFilledIcon";
import MoreIcon from "../../../icons/MoreIcon";

export default function FolderList() {
  // assume this list are fetched by api and this user created folders name
  const foldersName = [
    { folderName: "Folder Name" },
    { folderName: "Folder Name" },
    { folderName: "Folder Name" },
  ];
  return (
    <div className="py-[16px]">
      <div className="h-[25px] flex flex-row justify-between">
        <span className="flex flex-row gap-2">
          <span>
            <FolderOutlineIcon />
          </span>
          <span className="font-semibold text-lg">Folders</span>
        </span>
        <span className="flex flex-row items-end gap-4">
          <span className="border-b-2 border-b-red-900">
            <CategoryIcon />
          </span>
          <span>
            <ListIcon />
          </span>
          <span className="text-blue-600 underline text-sm">
            Show all folders
          </span>
        </span>
      </div>

      <div className="flex justify-between flex-row pt-4 ">
      <div className="flex  w-[95%] " >
       {foldersName?.map((item, i) => (
          <div
            key={i}
            className="w-1/3 h-[40px] px-2 rounded bg-white mr-4 flex justify-between items-center "
          >
            <span className="flex flex-row gap-2 items-center">
              <span>
                <FolderFilledIcon />
              </span>
              <span className="font-semibold text-sm" >{item.folderName}</span>
            </span>

            <span>
                <MoreIcon/>
            </span>
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

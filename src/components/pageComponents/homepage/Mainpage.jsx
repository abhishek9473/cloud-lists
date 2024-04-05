import React from "react";
import StorageList from "./homeComponent/StorageList";
import FolderList from "./homeComponent/FolderList";
import FileList from "./homeComponent/FileList";

export default function Mainpage() {
  return (
    <>
      <div className="pr-6 pl-[15px]">
        <StorageList />
        <FolderList/>
        <FileList/>
      </div>
    </>
  );
}

import ArrowIcon from "../../../icons/ArrowIcon";
import EyeIcon from "../../../icons/EyeIcon";
import FolderIcon from "../../../icons/FolderIcon";
import LinkIcon from "../../../icons/LinkIcon";

export default function LinkList() {
  // assume this data are fetched by API
  const linkLists = [
    {
      linkUrl: "Link Name One",
      folder: "Folder or File linked..",
      totalView: 10,
    },
    {
      linkUrl: "Link Name One",
      folder: "Folder or File linked..",
      totalView: 10,
    },
    {
      linkUrl: "Link Name One",
      folder: "Folder or File linked..",
      totalView: 10,
    },
  ];
  return (
    <div>
      {linkLists?.map((item, i) => (
        <div
          className="w-[225px] h-[100px] border border-gray-400 rounded-md mb-1"
          key={i}
        >
          <div className="flex flex-row justify-between px-2 py-2">
            <div className="flex flex-row gap-2">
              <span>
                <LinkIcon />
              </span>
              <span className="font-semibold text-sm">{item.linkUrl}</span>
            </div>
            <span className="cursor-pointer rotate-90 items-center flex  ">
              <ArrowIcon />
            </span>
          </div>
          <div className="pl-10 space-y-2">
            <div className="flex flex-row gap-2">
              <FolderIcon />
              <span className="font-light text-sm">{item.folder}</span>
            </div>
            <div className="flex flex-row gap-2">
              <EyeIcon />
              <span className="font-light text-sm">{item.totalView} {" "} Total Views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

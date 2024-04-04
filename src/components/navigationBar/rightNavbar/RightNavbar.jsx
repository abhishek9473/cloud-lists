import React from "react";
import LinkList from "./rightNavbarComponents/LinkList";
import ArrowIcon from "../../icons/ArrowIcon";
import DiagonalZoonIcon from "../../icons/DiagonalZoonIcon";
import InfoImage from "./rightNavbarComponents/InfoImage";

export default function RightNavbar() {
  return (
    <div className="pl-4">
      <div className="pr-4 py-4">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-lg leading-5 tracking-wide">
            Cloud Analytics
          </span>
          <span>
            <DiagonalZoonIcon />
          </span>
        </div>
        <div className="font-extralight">5 Active Analytic Links</div>
      </div>

      {/* all links */}
      <div>
        <LinkList />
        <div className="flex flex-row gap-2 py-4 pl-2">
          <span
            className="relative bottom-1 cursor-pointer "
            style={{ transform: "rotate(180deg)" }}
          >
            <ArrowIcon />
          </span>
          <span className="font-medium text-xs cursor-pointer">View More</span>
        </div>
        <div>
          <InfoImage/>
        </div>
      </div>
    </div>
  );
}

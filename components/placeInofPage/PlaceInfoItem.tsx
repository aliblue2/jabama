import { NextPage } from "next";
import React from "react";

const PlaceInfoItem: NextPage<{
  children: React.ReactNode;
  itemState: string;
}> = ({ children, itemState }) => {
  return (
    <span
      className={`${
        itemState === "true" ? "text-blackColor" : "text-gray-400 line-through"
      } flex items-center justify-between w-full`}
    >
      {children}
    </span>
  );
};

export default PlaceInfoItem;

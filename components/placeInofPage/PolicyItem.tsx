import { NextPage } from "next";
import React from "react";
import { IoCheckboxOutline, IoCloseCircleOutline } from "react-icons/io5";

const PolicyItem: NextPage<{
  children: React.ReactNode;
  itemState: string;
}> = ({ children, itemState }) => {
  return (
    <span
      className={`${
        itemState === "true" ? "text-blackColor font-medium" : "text-gray-400 line-through"
      } text-xs flex items-center justify-start gap-2`}
    >
      {itemState === "true" ? (
        <IoCheckboxOutline size={18} />
      ) : (
        <IoCloseCircleOutline size={18} />
      )}
      {children}
    </span>
  );
};

export default PolicyItem;

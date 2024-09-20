import { NextPage } from "next";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const PlaceUserQunatity: NextPage<{ maxCepacity: number }> = ({
  maxCepacity,
}) => {
  const [userCount, setUserCount] = useState(1);
  return (
    <div className="flex items-center justify-between gap-2 mt-3 border border-gray-300 rounded-lg p-2">
      <div className="flex items-center justify-start gap-2">
        <IoPersonOutline size={16} />
        <div className="flex flex-col items-start justify-center gap-1">
          <span className="text-sm">تعداد مسافران</span>
          <span className="text-xs">{userCount} نفر</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          disabled={userCount <= 1 && true}
          className={`${
            userCount <= 1 && "opacity-50"
          } border border-gray-300 rounded-lg p-1`}
          onClick={() => setUserCount((prevCount) => prevCount - 1)}
        >
          <FaMinus size={12} />
        </button>
        <span className="text-sm font-medium">{userCount}</span>
        <button
          disabled={userCount >= maxCepacity && true}
          className={`${
            userCount >= maxCepacity && "opacity-50"
          } border border-gray-300 rounded-lg p-1`}
          onClick={() => setUserCount((prevCount) => prevCount + 1)}
        >
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  );
};

export default PlaceUserQunatity;

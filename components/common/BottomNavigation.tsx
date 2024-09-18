import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHeart, GoHeartFill, GoHome, GoHomeFill } from "react-icons/go";
import {
  IoChatboxEllipses,
  IoChatboxEllipsesOutline,
  IoPerson,
  IoPersonOutline,
  IoTicket,
  IoTicketOutline,
} from "react-icons/io5";

const BottomNavigation = () => {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-10 flex items-center justify-between w-full gap-2 px-5 py-2 text-xs bg-white border rounded-t-lg shadow-2xl h-14 shadow-orange-500 sm:hidden">
      <Link
        className={`flex flex-col items-center justify-center gap-1 font-medium text-[11px] w-20 ${
          pathName === "/" ? "text-blackColor" : "text-gray-400"
        }`}
        href={"/"}
      >
        {pathName === "/" ? <GoHomeFill size={18} /> : <GoHome size={18} />}
        خانه
      </Link>
      <Link
        className={`flex flex-col items-center justify-center gap-1 font-medium text-[11px] w-20 ${
          pathName === "/favorites" ? "text-blackColor" : "text-gray-400"
        }`}
        href={"/favorites"}
      >
        {pathName === "/favorites" ? (
          <GoHeartFill size={18} />
        ) : (
          <GoHeart size={18} />
        )}
        علاقه مندی
      </Link>
      <Link
        className={`flex flex-col items-center justify-center gap-1 font-medium text-[11px] w-20 ${
          pathName === "/travels" ? "text-blackColor" : "text-gray-400"
        }`}
        href={"/travels"}
      >
        {pathName === "/travels" ? (
          <IoTicket size={18} />
        ) : (
          <IoTicketOutline size={18} />
        )}
        سفرهای من
      </Link>
      <Link
        className={`flex flex-col items-center justify-center gap-1 font-medium text-[11px] w-20 ${
          pathName === "/chat" ? "text-blackColor" : "text-gray-400"
        }`}
        href={"/chat"}
      >
        {pathName === "/chat" ? (
          <IoChatboxEllipses size={18} />
        ) : (
          <IoChatboxEllipsesOutline size={18} />
        )}
        پشتیبانی
      </Link>
      <Link
        className={`flex flex-col items-center justify-center gap-1 font-medium text-[11px] w-20 ${
          pathName === "/auth" ? "text-blackColor" : "text-gray-400"
        }`}
        href={"/auth"}
      >
        {pathName === "/auth" ? (
          <IoPerson size={18} />
        ) : (
          <IoPersonOutline size={18} />
        )}
        ورود / ثبت نام
      </Link>
    </div>
  );
};

export default BottomNavigation;

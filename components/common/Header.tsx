import logoImage from "@/assets/logo.svg";
import Image from "next/image";
import {
  IoDiamondOutline,
  IoHeartOutline,
  IoPerson,
  IoSearch,
} from "react-icons/io5";
import PrimaryBtn from "./PrimaryBtn";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { scrollY } = useScroll();
  const headerBgColor = useTransform(scrollY, [0, 400], ["#0000", "#fff"]);
  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBgColor }}
        className="sticky top-0 z-20 w-full h-16 "
      >
        <div className="flex items-center justify-between gap-5 h-full max-w-[1100px] mx-auto px-5">
          <Link href={"/"}>
            <Image src={logoImage} alt="jabma logo image" />
          </Link>
          <div className="items-center justify-start hidden w-4/12 gap-1 px-2 text-sm bg-white border rounded-lg md:flex focus:border-primaryColor">
            <IoSearch size={20} className="text-primaryColor" />
            <input
              type="text"
              name="search"
              id="search"
              className="w-full p-2 outline-none"
              placeholder="جستجو شهرُ استان یا اقامتگاه"
            />
          </div>
          <div className="flex items-center justify-start gap-2">
            <PrimaryBtn>
              <IoDiamondOutline size={18} />
              <span className="hidden sm:block">جاباما تجربه</span>
            </PrimaryBtn>
            <PrimaryBtn>
              <IoHeartOutline size={18} />
              <span className="hidden sm:block">مورد علاقه ها</span>
            </PrimaryBtn>
            <PrimaryBtn>
              <IoPerson
                size={18}
                className="p-[2px] bg-gradient-to-b from-gray-300 to-whiteColor rounded-full text-gray-500"
              />
              <span className="hidden sm:block">ورود و ثبت نام</span>
            </PrimaryBtn>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;

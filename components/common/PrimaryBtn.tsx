import { NextPage } from "next";
import React from "react";
import { motion } from "framer-motion";
const PrimaryBtn: NextPage<{
  children: React.ReactNode;
  onClickFc?: () => void;
}> = ({ children, onClickFc }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClickFc}
      transition={{
        type: "spring",
        bounce: 0.5,
        stiffness: 500,
      }}
      className="flex items-center justify-center gap-1 p-2 text-xs font-medium rounded-lg bg-whiteColor hover:bg-primaryColor hover:text-white text-blackColor "
    >
      {children}
    </motion.button>
  );
};

export default PrimaryBtn;

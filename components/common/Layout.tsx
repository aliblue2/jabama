import { NextPage } from "next";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full bg-white text-blackColor">
      <Header />
      <div className="max-w-[1100px] mx-auto p-2">{children}</div>
      <BottomNavigation />
      <Footer />
    </div>
  );
};

export default Layout;

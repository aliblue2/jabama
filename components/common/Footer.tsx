import React from "react";
import logoIMage from "@/assets/logo.svg";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mb-12 bg-whiteColor sm:mb-0">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-4">
          <div className="col-span-1">
            <h6 className="text-lg font-medium">نحوه رزرو اقامتگاه</h6>
            <ul className="flex flex-col items-start justify-start gap-2 mt-2 text-sm">
              <li>راهنمای رزرو اقامتگاه</li>
              <li>شیوه‌های پرداخت</li>
              <li>لغو رزرو</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="text-lg font-medium">خدمات مشتریان</h6>
            <ul className="flex flex-col items-start justify-start gap-2 mt-2 text-sm">
              <li>پرسش‌های متداول مهمان</li>
              <li>چطور اقامتگاه ثبت کنم؟</li>
              <li>پرسش‌های متداول میزبان</li>
              <li>حریم شخصی کاربران</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="text-lg font-medium">با جاباما</h6>
            <ul className="flex flex-col items-start justify-start gap-2 mt-2 text-sm">
              <li>مجله جاباما</li>
              <li>درباره جاباما</li>
              <li>قوانین جاباما</li>
              <li>تماس با ما</li>
              <li>فرصت‌های شغلی</li>
            </ul>
          </div>
          <div className="col-span-1">
            <Image src={logoIMage} alt="jabamlogoimage" />
            <h6 className="mt-5 text-lg font-medium">
              جاباما را در شبکه‌های اجتماعی دنبال کنید:
            </h6>
            <div className="flex items-center justify-start gap-2 mt-5 text-primaryColor">
              <FaLinkedin size={20} />
              <FaInstagram size={20} />
              <FaTelegram size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-gray-200">
        <div className="max-w-[1100px] mx-auto flex md:flex-row flex-col items-center justify-between">
          <p className="text-sm">در تمامی سفر‌های شما، ۲۴ ساعته در کنار شما هستیم.</p>
          <div className="flex flex-col items-center justify-start gap-5 text-xs md:flex-row">
            <span>تلفن پشتیبانی : ۴۳۹۰۰۹۰۰ - ۰۲۱</span>
            <span>ایمیل : support@jabama.ir</span>
            <span>کد پستی : ۱۳۹۳۷۳۳۶۹۱</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

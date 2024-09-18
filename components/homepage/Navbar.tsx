import React from "react";
import villaImg from "@/assets/villa.png";
import beachImg from "@/assets/beach.png";
import boomImg from "@/assets/boom.png";
import buildingImg from "@/assets/building.png";
import experiencesImg from "@/assets/experiences.jpg";
import kolbehImg from "@/assets/kolbeh.png";
import offerImg from "@/assets/offer.jpg";
import poolImg from "@/assets/pool.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="relative grid grid-cols-4 gap-5 py-1 bg-white md:shadow-md md:rounded-lg lg:px-20 mt-72 md:grid-cols-8">
      <div className="flex flex-col items-center justify-center">
        <Image src={villaImg} alt="villa-image" className="max-w-16" />
        <h6 className="text-sm font-medim">ویلا</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={kolbehImg} alt="kolbeh-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> کلبه </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={boomImg} alt="boom-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> بومگردی </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={poolImg} alt="pool-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> استخردار </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={beachImg} alt="beach-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> ساحلی </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={buildingImg} alt="building-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> آپارتمان </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={offerImg} alt="offer-image" className="max-w-16" />
        <h6 className="text-sm font-medim"> پیشنهاد ویژه </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={experiencesImg}
          alt="experiences-image"
          className="max-w-16"
        />
        <h6 className="text-sm font-medim"> تجربه </h6>
      </div>
    </div>
  );
};

export default Navbar;

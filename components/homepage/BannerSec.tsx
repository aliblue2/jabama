import { Banner } from "@/models/Banner";
import { NextPage } from "next";
import Image from "next/image";

const BannerSec: NextPage<{ banners: Banner[] }> = ({ banners }) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4">
      {banners.map((banner) => {
        return (
          <Image
            src={banner.image_data}
            key={banner.id}
            width={300}
            height={300}
            className="object-cover w-full h-44 rounded-xl"
            alt="banners image"
          />
        );
      })}
    </div>
  );
};

export default BannerSec;

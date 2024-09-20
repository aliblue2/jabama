import { NextPage } from "next";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PlaceImages: NextPage<{ images: string[] }> = ({ images }) => {
  return (
    <div className="group">
      <div className="hidden grid-cols-2 gap-2 mt-3 md:grid ">
        <Image
          src={images[0]}
          alt="main image"
          className="object-cover w-full h-full group-hover:grayscale hover:!grayscale-0 "
          width={300}
          height={150}
        />
        <div className="grid grid-cols-2 col-span-1 grid-rows-2 gap-2">
          {images.slice(1, images.length - 1).map((imageData) => {
            return (
              <Image
                src={imageData}
                key={imageData}
                alt="images gallery"
                className="object-cover w-full h-full group-hover:grayscale hover:!grayscale-0 "
                width={300}
                height={150}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full mt-3 h-[300px] overflow-hidden md:hidden">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {images.map((imagedata, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  width={300}
                  className="object-cover w-full h-full"
                  height={150}
                  src={imagedata}
                  alt={imagedata}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PlaceImages;

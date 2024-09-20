import { PopPlace } from "@/models/PopPlaces";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import Image from "next/image";

const PopularDestinationSlider: NextPage<{ destinationsData: PopPlace[] }> = ({
  destinationsData,
}) => {
  return (
    <div className="my-12">
      <h5 className="text-lg font-medium">اجاره ویلا در مقصدهای محبوب</h5>
      <span className="block mb-5 text-sm">
        اقامتگاه در شهرهای پرطرفدار با ما
      </span>
      <Swiper
        slidesPerView={2.7}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 5.5,
          },
        }}
        className="mySwiper"
      >
        {destinationsData.map((destination) => {
          return (
            <SwiperSlide key={destination.id}>
              <Image
                className="w-full h-40 md:h-56 rounded-lg object-cover "
                width={300}
                height={150}
                src={destination.image}
                alt={destination.title}
              />
              <h6 className="mt-2 font-medium text-sm">{destination.title}</h6>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularDestinationSlider;

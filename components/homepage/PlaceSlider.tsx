import { Place } from "@/models/Place";
import { NextPage } from "next";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
const PlaceSlider: NextPage<{
  places: Place[];
  title: string;
  content: string;
}> = ({ places, title, content }) => {
  return (
    <div className="my-12">
      <h5 className="text-lg font-medium">{title}</h5>
      <span className="block mb-5 text-sm">{content}</span>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.3,
          },
          768: {
            slidesPerView: 3.3,
          },
          1024: {
            slidesPerView: 4.3,
          },
        }}
        className="mySwiper"
      >
        {places.map((place) => {
          const tempGallery = place.gallery.split(",");
          tempGallery.push(place.image);

          return (
            <SwiperSlide key={place.id}>
              <Link href={`/places/${place.id}`}>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {tempGallery.map((imagedata, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Image
                          width={300}
                          className="object-cover w-full rounded-lg h-44 "
                          height={150}
                          src={imagedata}
                          alt={place.title}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Link>
              <Link
                href={`/places/${place.id}`}
                className="flex flex-col items-start justify-start gap-1 mt-2"
              >
                <p className="text-xs flex items-center justify-start gap-1">
                  <IoStar size={14} className="text-primaryColor" />
                  <span className="text-[10px]">
                    {place.rate.rate.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    ({place.rate.count.toLocaleString("fa-IR") + " دیدگاه"})
                  </span>
                </p>
                <h6 className="text-xs font-bold line-clamp-1">
                  {place.title}
                </h6>
                <span className="text-xs text-gray-500">
                  {"استان " + place.state + "، "}
                  {place.city}
                </span>
                <h6 className="text-xs font-bold line-clamp-1">
                  {place.price.toLocaleString("fa-IR")}{" "}
                  <span className="text-gray-400 text-[10px]">/هرشب</span>
                </h6>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PlaceSlider;

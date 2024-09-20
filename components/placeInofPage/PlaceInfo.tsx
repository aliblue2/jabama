import { Place } from "@/models/Place";
import { NextPage } from "next";
import {
  IoChatboxEllipsesOutline,
  IoFlashOutline,
  IoStar,
} from "react-icons/io5";
import PlacesInformation from "./PlacesInformation";
import PlaceFetures from "./PlaceFetures";
import PlacePoliciesSec from "./PlacePoliciesSec";
import PlaceMap from "./PlaceMap";
import PlaceDateRange from "./PlaceDateRange";
import PlaceUserQunatity from "./PlaceUserQunatity";

const PlaceInfo: NextPage<{ place: Place }> = ({ place }) => {
  return (
    <div className="flex items-start justify-between min-h-screen gap-5 my-5">
      <main className="flex flex-col items-start justify-start w-full gap-5 md:w-8/12">
        <h5 className="text-xl font-medium">{place.title}</h5>
        <div className="flex items-center justify-center w-full gap-3 text-sm md:justify-start">
          <span className="flex items-center justify-center gap-2">
            <IoStar size={20} className="text-primaryColor" />
            {place.rate.rate + " "}({"دیدگاه " + place.rate.count})
          </span>
          <span>{place.state + " ، " + place.city}</span>
        </div>
        <div className="w-full p-2 border-t border-gray-300">
          <div className="flex items-center justify-start gap-2 my-3">
            <IoChatboxEllipsesOutline size={20} />
            <div className="flex flex-col items-start justify-start gap-1 text-sm font-medium">
              <h6>چت با میزبان</h6>
              <span className="text-xs">
                برای رزرو نهایی این ویلا نیازی به تایید از سمت میزبان نخواهید
                داشت و رزرو شما قطعی خواهد بود.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2 my-3">
            <IoFlashOutline size={20} />
            <div className="flex flex-col items-start justify-start gap-1 text-sm font-medium">
              <h6>رزرو آنی و قطعی با جاباما</h6>
              <span className="text-xs">
                برای رزرو نهایی این ویلا نیازی به تایید از سمت میزبان نخواهید
                داشت و رزرو شما قطعی خواهد بود.
              </span>
            </div>
          </div>
        </div>
        <PlacesInformation placeInfo={place.place_info} />
        <div className="w-full p-3 leading-relaxed border-t border-gray-300">
          <h6 className="mb-3 text-lg font-medium"> توضیحات ویلا </h6>
          <p className="text-sm">{place.description}</p>
        </div>
        <PlaceFetures placeFeatures={place.place_features} />
        <PlacePoliciesSec palcePoliccies={place.place_policy} />
        <PlaceMap geoLocation={place.geo_location} />
      </main>
      <aside className="sticky left-0 hidden w-4/12 p-5 bg-white border border-gray-300 rounded-lg md:block top-20">
        <div className="flex items-center justify -between gap-2">
          <div className="text-xs">
            شروع قیمت از :{" "}
            <span className="font-medium text-sm">
              {place.price.toLocaleString("fa-IR") + " تومان / هرشب"}
            </span>
          </div>
          <span className="font-medium text-xs flex items-center justify-center gap-1">
            <IoStar size={18} className="text-primaryColor" />
            {place.rate.rate + " "}({place.rate.count})
          </span>
        </div>
        <PlaceDateRange />
        <PlaceUserQunatity maxCepacity={place.place_info.cepacity} />
        <button className="bg-primaryColor hover:bg-accentColor p-2 rounded-lg w-full text-blackColor font-medium mt-2">
          انتخاب تاریخ رزرو
        </button>
        <span className="text-xs text-center w-full block mt-2">
          ارسال درخواست رزرو برای شما هزینه‌ای ندارد!
        </span>
      </aside>
      <div className="flex bg-gradient-to-r from-primaryColor to-blackColor text-white rounded-t-lg p-2 md:hidden items-center justify-between gap-2 fixed bottom-14 left-0 w-full">
        <p className="text-sm">
          شروع قیمت از
          <span className="font-medium text-lg px-1">
            {place.price.toLocaleString("fa-IR")}
          </span>
        </p>
        <button className="text-white text-sm font-medium p-2 bg-blackColor rounded-lg">
          انتخاب تاریخ
        </button>
      </div>
    </div>
  );
};

export default PlaceInfo;

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

const PlaceInfo: NextPage<{ place: Place }> = ({ place }) => {
  return (
    <div className="flex items-start justify-between min-h-screen gap-5 my-5">
      <div className="flex flex-col items-start justify-start w-full gap-5 md:w-8/12">
        <h5 className="text-xl font-medium">{place.title}</h5>
        <p className="flex items-center justify-center w-full gap-3 text-sm md:justify-start">
          <span className="flex items-center justify-center gap-2">
            <IoStar size={20} className="text-primaryColor" />
            {place.rate.rate + " "}({"دیدگاه " + place.rate.count})
          </span>
          <span>{place.state + " ، " + place.city}</span>
        </p>
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
              <h6>رزرو آنی و فطعی با جاباما</h6>
              <span className="text-xs">
                برای رزرو نهایی این ویلا نیازی به تایید از سمت میزبان نخواهید
                داشت و رزرو شما قطعی خواهد بود.
              </span>
            </div>
          </div>
        </div>
        <PlacesInformation placeInfo={place.place_info} />
        <p className="w-full p-3 leading-relaxed border-t border-gray-300">
          <h6 className="mb-3 text-lg font-medium"> توضیحات ویلا </h6>
          {place.description}
        </p>
        <PlaceFetures placeFeatures={place.place_features} />
        <PlacePoliciesSec palcePoliccies={place.place_policy} />
      </div>
      <div className="sticky left-0 hidden w-4/12 p-5 overflow-hidden bg-white border border-gray-300 rounded-lg md:block top-20">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm">
            شروع قیمت از : <span className="font-medium">
              {place.price.toLocaleString("fa-IR") + " تومان / هرشب"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceInfo;

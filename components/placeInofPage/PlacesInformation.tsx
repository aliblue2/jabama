import { PlaceInfo } from "@/models/Place";
import { NextPage } from "next";
import { IoBedOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { TbToiletPaper, TbToolsKitchen2 } from "react-icons/tb";

const PlacesInformation: NextPage<{ placeInfo: PlaceInfo }> = ({
  placeInfo,
}) => {
  return (
    <div className="w-full p-2 border-t border-gray-300">
      <h6 className="mb-5 text-lg font-medium">مشخصات کلی ویلا</h6>
      <div className="flex items-center justify-start w-full gap-2 my-3">
        <IoHomeOutline size={24} />
        <p>
          <h6 className="font-medium">فضای ویلا</h6>
          <span className="text-sm">
            {placeInfo.space + " "}متر زیربنا دربست ۵ پله{" "}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-start w-full gap-2 my-3">
        <IoPersonOutline size={24} />
        <p>
          <h6 className="font-medium">ظرفیت </h6>
          <span className="text-sm">
            ظرفیت تا{" " + placeInfo.cepacity + " نفر"}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-start w-full gap-2 my-3">
        <IoBedOutline size={24} />
        <p>
          <h6 className="font-medium"> سرویس‌های خواب </h6>
          <span className="text-sm">
            {placeInfo.bedrooms + " "} اتاق ۱ تخت دو نفره ۲ تخت یک نفره ۲
            رخت‌خواب سنتی{" "}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-start w-full gap-2 my-3">
        <TbToiletPaper size={24} />
        <p>
          <h6 className="font-medium"> سرویس‌های بهداشتی </h6>
          <span className="text-sm">
            {placeInfo.bathroom + " "} سرویس ایرانی سرویس فرنگی ندارد ۱ حمام
          </span>
        </p>
      </div>
      <div className="flex items-center justify-start w-full gap-2 my-3">
        <TbToolsKitchen2 size={24} />
        <p>
          <h6 className="font-medium">آشپزخانه</h6>
          <span className="text-sm">
            {placeInfo.kitchen + " "} آشپزخانه و ۱ فر
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlacesInformation;

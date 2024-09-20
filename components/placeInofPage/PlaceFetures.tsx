import { PlaceFeatures } from "@/models/Place";
import { NextPage } from "next";
import { BiTv } from "react-icons/bi";

import {
  TbCampfire,
  TbMobiledata,
  TbParking,
  TbPool,
  TbWind,
} from "react-icons/tb";

import PlaceInfoItem from "./PlaceInfoItem";

const PlaceFetures: NextPage<{ placeFeatures: PlaceFeatures }> = ({
  placeFeatures,
}) => {
  return (
    <div className="w-full p-3 border-t border-gray-300">
      <h6 className="mb-5 text-lg font-medium">مشخصات کلی ویلا</h6>
      <div className="grid grid-cols-2 gap-5">
        <PlaceInfoItem itemState={placeFeatures.parking}>
          پارکینگ
          <TbParking size={20} />
        </PlaceInfoItem>
        <PlaceInfoItem itemState={placeFeatures.cooler}>
          کولر
          <TbWind size={20} />
        </PlaceInfoItem>
        <PlaceInfoItem itemState={placeFeatures.network}>
          آنتن دهی
          <TbMobiledata size={20} />
        </PlaceInfoItem>
        <PlaceInfoItem itemState={placeFeatures.heater}>
          بخاری
          <TbCampfire size={20} />
        </PlaceInfoItem>
        <PlaceInfoItem itemState={placeFeatures.pool}>
          استخر
          <TbPool size={20} />
        </PlaceInfoItem>
        <PlaceInfoItem itemState={placeFeatures.television}>
          تلویزیون
          <BiTv size={20} />
        </PlaceInfoItem>
      </div>
    </div>
  );
};

export default PlaceFetures;

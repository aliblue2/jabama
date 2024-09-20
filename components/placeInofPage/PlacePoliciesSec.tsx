import { PlacePolicy } from "@/models/Place";
import { NextPage } from "next";
import { IoCloseCircleOutline, IoDocumentOutline } from "react-icons/io5";
import PolicyItem from "./PolicyItem";

const PlacePoliciesSec: NextPage<{ palcePoliccies: PlacePolicy }> = ({
  palcePoliccies,
}) => {
  return (
    <div className="w-full p-3 border-t border-gray-300">
      <h6 className="mb-5 text-lg font-medium">قوانین و مقررات آپارتمان</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex items-start justify-start gap-2 w-full">
          <IoCloseCircleOutline size={20} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h6 className="font-medium text-sm">قوانین لغو رزرو</h6>
            <span className="text-xs">
              مشاهده دقیق جزئیات لغو رزرو آپارتمان
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex items-center justify-start gap-2 w-full">
            <IoDocumentOutline size={20} />
            <h6 className="font-medium text-sm">مقررات آپارتمان</h6>
          </div>
          <PolicyItem itemState={palcePoliccies.smoking}>
            استعمال دخانیات مجاز است.
          </PolicyItem>
          <PolicyItem itemState={palcePoliccies.accept_per_day}>
            پذیرش ۲۴ ساعته مهمان .
          </PolicyItem>
          <PolicyItem itemState={palcePoliccies.id_cart}>
            همراه داشتن کارت ملی الزامی می باشد .
          </PolicyItem>
          <PolicyItem itemState={palcePoliccies.party}>
            برگزاری مراسم مجاز است .
          </PolicyItem>
          <PolicyItem itemState={palcePoliccies.pet}>
            ورود حیوانات خانگی مجاز است.
          </PolicyItem>
        </div>
      </div>
    </div>
  );
};

export default PlacePoliciesSec;

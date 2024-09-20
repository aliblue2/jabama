import { NextPage } from "next";
import dynamic from "next/dynamic";

const PlaceMap: NextPage<{ geoLocation: string }> = ({ geoLocation }) => {
  const geoLoc = geoLocation.split(",").map((geoitem) => {
    return parseFloat(geoitem);
  });
  const DynamicMapFc = dynamic(() => import("./MapViewre"), {
    ssr: false,
  });
  return <DynamicMapFc geoLocationData={geoLoc} />;
};

export default PlaceMap;

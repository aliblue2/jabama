import { NextPage } from "next";
import { Map, Marker } from "pigeon-maps";
const MapViewer: NextPage<{ geoLocationData: number[] }> = ({
  geoLocationData,
}) => {
  return (
    <div className="w-full border-t border-gray-300 p-3">
      <h5 className="text-lg font-medium">موقعیت مکانی</h5>
      <h6 className="text-sm font-medium mb-5">
        موقعیت مکانی دقیق آپارتمان پس از رزرو کامل ارسال خواهد شد.
      </h6>
      <Map
        height={320}
        defaultCenter={[geoLocationData[0], geoLocationData[1]]}
        defaultZoom={16}
      >
        <Marker width={50} anchor={[geoLocationData[0], geoLocationData[1]]} />
      </Map>
    </div>
  );
};

export default MapViewer;

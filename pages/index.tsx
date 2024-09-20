import BannerSec from "@/components/homepage/BannerSec";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import PlaceSlider from "@/components/homepage/PlaceSlider";
import PopularDestinationSlider from "@/components/homepage/PopularDestinationSlider";
import { Banner } from "@/models/Banner";
import { Place } from "@/models/Place";
import { PopPlace } from "@/models/PopPlaces";
import {
  getAllBanners,
  getAllPlaces,
  getAllPopularDestinations,
} from "@/utils/Services";
import { GetStaticProps, NextPage } from "next";

const Index: NextPage<{
  popularDestinations: PopPlace[];
  places: Place[];
  placesAlborz: Place[];
  placesShir: Place[];
  placesYazd: Place[];
  placesHam: Place[];
  placesKer: Place[];
  banners: Banner[];
}> = ({
  popularDestinations,
  places,
  placesAlborz,
  placesShir,
  placesYazd,
  placesHam,
  placesKer,
  banners,
}) => {
  return (
    <>
      <Hero />
      <Navbar />
      <BannerSec banners={banners} />
      <PopularDestinationSlider destinationsData={popularDestinations} />
      <PlaceSlider
        places={places}
        title="بومگردی‌های اختصاصی جاباما"
        content="اقامت خاطره انگیز در خانه‌ها و ویلاهای اختصاصی با ما"
      />
      <PlaceSlider
        places={placesAlborz}
        title="اجاره آپارتمان روزانه در اطراف تهران"
        content="اقامتِ با کیفیت تو پایتخت با ما"
      />
      <PlaceSlider
        places={placesShir}
        title="اجاره آپارتمان روزانه در اطراف شیراز"
        content="اقامتِ با کیفیت تو شیراز با ما"
      />
      <PlaceSlider
        places={placesYazd}
        title="اجاره آپارتمان روزانه در اطراف یزد"
        content="اقامتِ با کیفیت تو یزد با ما"
      />
      <PlaceSlider
        places={placesHam}
        title="اجاره آپارتمان روزانه در اطراف همدان"
        content="اقامتِ با کیفیت تو همدان با ما"
      />
      <PlaceSlider
        places={placesKer}
        title="اجاره ویلا و بومگردی اطراف کرمانشاه"
        content="اقامتِ با کیفیت تو کرمانشاه با ما"
      />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const popularDestinations = await getAllPopularDestinations();
  const places = await getAllPlaces("");
  const placesAlborz = await getAllPlaces("البرز");
  const placesShir = await getAllPlaces("شیراز");
  const placesYazd = await getAllPlaces("یزد");
  const placesHam = await getAllPlaces("همدان");
  const placesKer = await getAllPlaces("کرمانشاه");
  const banners = await getAllBanners();
  return {
    props: {
      popularDestinations,
      places,
      placesAlborz,
      placesShir,
      placesYazd,
      placesHam,
      placesKer,
      banners,
    },
  };
};

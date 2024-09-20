import PlaceImages from "@/components/placeInofPage/PlaceImages";
import PlaceInfo from "@/components/placeInofPage/PlaceInfo";
import { Place } from "@/models/Place";
import { getAllPlaces, getPlaceInfo } from "@/utils/Services";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Index: NextPage<{ placeInfo: Place }> = ({ placeInfo }) => {
  const tempGallery = placeInfo.gallery.split(",");
  tempGallery.push(placeInfo.image);

  return (
    <section>
      <PlaceImages images={tempGallery} />
      <PlaceInfo place={placeInfo} />
    </section>
  );
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const places = await getAllPlaces();
  return {
    fallback: "blocking",
    paths: places.map((place: Place) => {
      return {
        params: {
          placeId: place.id.toString(),
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const placeId = context.params!.placeId;
  const placeInfo = await getPlaceInfo(placeId!.toString());

  return {
    props: {
      placeInfo: placeInfo[0],
    },
  };
};

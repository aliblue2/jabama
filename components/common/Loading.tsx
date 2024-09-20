import { NextPage } from "next";
import Image from "next/image";
import loadingImage from "@/assets/loading.svg";
const Loading: NextPage = ({}) => {
  return (
    <div className="fixed top-0 z-20 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-70 ">
      <Image src={loadingImage} alt="loading ..." width={200} height={100} />
    </div>
  );
};

export default Loading;

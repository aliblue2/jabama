import heroImage from "@/assets/hero.jpg"
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";
const Hero = () => {
  return <div className="absolute top-0 left-0 z-0 h-[400px] w-full overflow-hidden" >
    <Image src={heroImage} alt="heroPage" className="object-cover w-full h-full " />
    <div className="absolute flex flex-col items-start justify-center gap-2 text-white top-32 right-5">
        <span className="text-sm">اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران
        </span>
        <h5 className="mb-5 text-3xl font-bold">
        سفر تابستونی از تو، جاباما
        </h5>
        <PrimaryBtn >
            مشاهده اقامتگاه ها
        </PrimaryBtn>
    </div>
  </div>;
};

export default Hero;

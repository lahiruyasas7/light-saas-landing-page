import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <div className="section py-24 px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center max-w-[728px] lg:max-w-[1040px">
          <h4 className="text-sm inline-flex border border-[#222222/10] px-3 py-1 rounded-lg">
            Boost your productivity
          </h4>
          <h2 className="font-bold text-center text-[32px] md:text-[54px] tracking-[-5%] leading-9 md:leading-[60px] bg-gradient-to-b from-black to-blue-800 text-transparent bg-clip-text">
            A more effective way to track progress
          </h2>
          <p className="font-normal text-center text-[22px] text-[#010D3E] tracking-[-2.5%] leading-[30px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
      </div>

      <div>
        <Image src={ProductImage} alt="product image" />
      </div>
      <div>
        <Image
          src={PyramidImage}
          alt="pyramid image"
          width={262}
          height={262}
          className="hidden md:block md:top-[286px] md:left-[630px] md:absolute lg:left-[1002px]"
        />
      </div>
    </div>
  );
};

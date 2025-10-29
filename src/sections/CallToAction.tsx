import CustomButton from "@/components/CustomButton";
import ArrowRight from "@/assets/arrow-right.svg";
import SpringImg from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="relative px-5 py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="section-heading">
        <h2 className="section-header">Sign up for free today </h2>
        <p className="section-description">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
      </div>
      <div className="flex justify-center gap-1 pt-10">
        <CustomButton>Get for free</CustomButton>
        <button className="py-2 px-4">
          Learn More
          <span>
            <ArrowRight className="w-5 h-5 inline-flex justify-center items-center text-black" />
          </span>
        </button>
      </div>
      <Image
        src={SpringImg}
        alt="spring image"
        className="md:absolute hidden md:block left-[75%] top-[137px] lg:left-[68%]"
        width={363}
        height={363}
      />
    </section>
  );
};

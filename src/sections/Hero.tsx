import CustomButton from "@/components/CustomButton";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:mb-12 md:mt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left_,#183EC2,#EAEEFE_66%)]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            {/* <div className="border px-3 py-1 rounded-lg w-[140px]"> */}
            <h4 className="text-sm inline-flex border border-[#222222/10] px-3 py-1 rounded-lg">
              Version 2.0 is here
            </h4>
            {/* </div> */}
            <h1 className="font-bold text-5xl md:text-7xl tracking-tight bg-gradient-to-b from-black to-blue-800 text-transparent bg-clip-text my-6">
              Pathway to productivity
            </h1>
            <p className="text-xl font-normal leading-[28px] tracking-[-2.5%] mb-[30px] text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1">
              <CustomButton>Get for free</CustomButton>
              <button className="py-2 px-4">
                Learn More
                <span>
                  <ArrowRight className="w-5 h-5 inline-flex justify-center items-center text-black" />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="cog image"
              className="md:h-full md:w-auto md:absolute md:max-w-none md:-left-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import CustomButton from "@/components/CustomButton";
import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="px-5 py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-header">Sign up for free today </h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
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
      </div>
    </section>
  );
};

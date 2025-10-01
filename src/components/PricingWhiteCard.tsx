import React from "react";
import CustomButton from "./CustomButton";

function PricingWhiteCard({ data }: any) {
  const isPopular = data?.popular;

  return (
    <div
      className={`rounded-3xl shadow-md p-10 w-[320px] min-h-[476px] max-w-sm border-2 transition-colors duration-300 ${
        isPopular
          ? "bg-black text-white border-white"
          : "bg-white text-black border-[#F1F1F1]"
      }`}
    >
      <div className="mb-5 flex justify-between items-center ">
        {/* Title */}
        <h3
          className={`text-lg font-bold  ${
            isPopular ? "text-white/50" : "text-black/50"
          }`}
        >
          {data?.title}
        </h3>
        {isPopular && (
          <h4 className="px-[16px] py-[6px] border rounded-xl bg-gradient-to-r from-[#dd7dff] via-[#e1cd86] via-[#8bcb92] via-[#71c2ef] via-[#3bffff] to-[#dd7dff] bg-clip-text text-transparent">
            Most Popular
          </h4>
        )}
      </div>

      {/* Price */}
      <div className="mb-5">
        <span className="font-bold text-4xl">${data?.monthlyPrice}</span>
        <span
          className={`text-base font-bold ${
            isPopular ? "text-white/50" : "text-black/50"
          }`}
        >
          {" "}
          /month
        </span>
      </div>

      {/* Button (optional: you might also invert this inside CustomButton) */}
      <CustomButton
        width="w-full"
        bgColor={isPopular ? "bg-white" : "bg-black"}
        textColor={isPopular ? "text-black" : "text-white"}
      >
        {data?.buttonText}
      </CustomButton>

      {/* Feature list */}
      <ul className="mt-5">
        {data?.features.map((feature: string, index: number) => (
          <li
            key={index}
            className={`text-sm mt-4 before:content-['✓'] before:mr-2 ${
              isPopular
                ? "text-white/70 before:text-white/70"
                : "text-black/70 before:text-black/70"
            }`}
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingWhiteCard;

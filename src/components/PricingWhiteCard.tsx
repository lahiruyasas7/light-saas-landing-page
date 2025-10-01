import React from "react";
import CustomButton from "./CustomButton";

function PricingWhiteCard({ data }: any) {
  console.log(data);
  return (
    <div className="bg-white rounded-lg shadow-md p-10 w-[320px] min-h-[470px] max-w-sm">
      <h3 className="text-lg font-bold text-[#000000]/50 mb-5">
        {data?.title}
      </h3>
      <div className="mb-5">
        <span className="font-bold text-4xl">${data?.monthlyPrice}</span>
        <span className="text-base font-bold text-[#000000]/50"> /month</span>
      </div>
      <CustomButton width="w-full">{data?.buttonText}</CustomButton>
      <ul className="mt-5">
        {data?.features.map((feature: string, index: number) => (
          <li
            key={index}
            className="text-sm text-[#000000]/70 mt-4 before:content-['✓'] before:text-[#000000]/70 before:mr-2"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingWhiteCard;

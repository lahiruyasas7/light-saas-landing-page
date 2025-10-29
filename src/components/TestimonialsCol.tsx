import { TestimonialsType } from "@/sections/Testimonials";
import Image from "next/image";
import React from "react";

function TestimonialsCol({data}: {data: TestimonialsType}) {
  return (
    <div
      className=" rounded-3xl shadow-md p-10 w-[320px] max-w-sm border-2 transition-colors duration-300"
      key={data?.username}
    >
      <p>{data?.text}</p>
      <div className="flex justify-start items-center gap-1 mt-4">
        <Image
          className="w-10 h-10 rounded-full"
          src={data.imageSrc}
          alt="name"
          width={10}
          height={10}
        />
        <div>
          <h4 className="font-medium">{data?.name}</h4>
          <h5 className="tracking-tighter">{data?.username}</h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCol;

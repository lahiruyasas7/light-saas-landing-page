import LogoImg from "@/assets/logosaas.png";
import Image from "next/image";
import InstaImg from "@/assets/social-insta.svg";
import LinkedinImg from "@/assets/social-linkedin.svg";
import PinImg from "@/assets/social-pin.svg";
import XImg from "@/assets/social-x.svg";
import YoutubeImg from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <section className="px-5 py-10 bg-black">
      <div className="flex justify-center items-center">
        <Image src={LogoImg} alt="logo image" width={40} height={40} />
      </div>
      <nav className="flex flex-col gap-6 items-center text-[#BCBCBC] mb-6">
        <a href="" className="text-[000000px] font-normal">
          About
        </a>
        <a href="">Features</a>
        <a href="">Customers</a>
        <a href="">Updates</a>
        <a href="">Pricing</a>
        <a href="">Help</a>
        <a href="">Careers</a>
      </nav>
      <div className="flex justify-center items-center gap-4 mb-6">
        <XImg className="text-white" />
        <InstaImg className="text-white" />
        <LinkedinImg className="text-white" />
        <PinImg className="text-white" />
        <YoutubeImg className="text-white" />
      </div>
      <p className="text-white text-sm font-normal text-center">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </section>
  );
};

import LogoImg from "@/assets/logosaas.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <section className="px-5 py-10 bg-black">
      <div className="flex justify-center items-center">
        <Image src={LogoImg} alt="logo image" width={40} height={40} />
      </div>
      <nav className="flex flex-col gap-6 items-center text-[#BCBCBC]">
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
    </section>
  );
};

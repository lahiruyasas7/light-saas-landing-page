import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center gap-4 h-[40px] bg-black text-sm">
        <p className="font-normal text-white">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="text-xs text-white">Get Started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center text-white" />
        </div>
      </div>
      <div className="flex justify-between items-center h-[80px]">
        <Image src={Logo} width={40} height={40} alt="saas logo" />
      </div>
    </header>
  );
};

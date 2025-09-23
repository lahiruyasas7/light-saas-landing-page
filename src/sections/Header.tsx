import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CustomButton from "@/components/CustomButton";
export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center gap-3 h-[40px] bg-black text-sm">
        <p className="font-normal text-white hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="text-xs text-white">Get Started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center text-white" />
        </div>
      </div>
      <div className="py-5">
        {" "}
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} width={40} height={40} alt="saas logo" />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 items-center text-black/60">
              <a href="" className="text-[000000px] font-normal">
                About
              </a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              <CustomButton>Get for free</CustomButton>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

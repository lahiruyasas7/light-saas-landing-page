import React from "react";
import clsx from "clsx";

type CustomButtonProps = {
  children: React.ReactNode;
  bgColor?: string;   // Tailwind color class, e.g. "bg-blue-500"
  width?: string;     // Tailwind width class, e.g. "w-32" or custom style
  height?: string;    // Tailwind height class, e.g. "h-12"
  className?: string; // Extra classes (e.g. rounded-lg, shadow-md)
  onClick?: () => void;
};

function CustomButton({
  children,
  bgColor = "bg-black",
  width = "w-[115px]",
  height = "h-[40px]",
  className,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-white flex items-center justify-center rounded-md",
        bgColor,
        width,
        height,
        className
      )}
    >
      {children}
    </button>
  );
}

export default CustomButton;

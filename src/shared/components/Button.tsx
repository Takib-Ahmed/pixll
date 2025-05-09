import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className={` Gradient-Button  flex items-center justify-center p-2.5 px-5 max-[400px]:py-2 max-[400px]:px-4  min-[375px]:p-3.5 min-[375px]:px-7   sm:py-[20px] sm:px-[32px] gap-[8px]    
text-sm min-[375px]:text-[15px]  sm:text-[20px]  sm:h-[64px] text-nowrap  leading-[120%] hover: ${className}  `}
    >
     <span className=" text-white">
       {children}
     </span>
    </Link>
  );
};

export default Button;
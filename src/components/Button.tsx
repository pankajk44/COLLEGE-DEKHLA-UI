import React from "react";

interface ButtonProps {
  variant?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "black",
  className = "",
  children,
  onClick,
  type = "button" // Default type is "button"
}) => {
  let style = "";
  if (variant === "black") {
    style = `w-min px-10 py-2 rounded-lg hover:bg-zinc-800 bg-black text-white`;
  }
  return (
    <button className={`${style} ${className} flex-center gap-2`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

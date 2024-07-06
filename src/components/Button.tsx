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
  type = "button", // Default type is "button"
}) => {
  let style = "";
  if (variant === "black") {
    style = `hover:bg-zinc-800 bg-black text-white`;
  }
  if (variant === "white") {
    style = `hover:bg-orange-500 bg-white text-black`;
  }
  if (variant === "orange") {
    style = `hover:bg-orange-300 bg-orange-200 text-orange-500 border border-orange-500`;
  }

  return (
    <button
      className={`${style} ${className} flex-center w-min gap-2 rounded-lg px-10 py-2 active:scale-90`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export const LoadingButton: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button", // Default type is "button"
}: any) => {
  return (
    <button
      className={`${className} loadingButton flex-center w-min gap-2 rounded-lg bg-orange-500 px-10 py-2 active:scale-90`}
      onClick={onClick}
      type={type}
    >
      <p className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
      </p>
      <span>{children}</span>
    </button>
  );
};

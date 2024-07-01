import React from "react";

const Wrapper = ({
    containerClassName = "",
  bgColor = "bg-white",
  children,
  className,
  isMaxWidthChangeRequired = "max-w-screen-2xl",
  as: Component = "section",
}: any) => {
  return (
    <Component className={`w-full ${bgColor} ${containerClassName}`}>
      <div
        className={`mx-auto w-full ${isMaxWidthChangeRequired} px-5 md:px-10 ${
          className || ""
        }`}
      >
        {children}
      </div>
    </Component>
  );
};

export default Wrapper;

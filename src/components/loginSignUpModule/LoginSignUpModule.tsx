"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { SignInContainer } from "./SignInContainer";
import { SignUpContainer } from "./SignUpContainer";
import { headerLogo } from "@/assets";
import { FaCircleCheck } from "react-icons/fa6";
import { login_bg } from "@/assets";
// import "src\app\globals.css";

export function LoginSignUpModule({
  setIsLoginModule,
  isLoginModule,
  closePopup,
}: any) {
  const handleOverlayClick = (e: any) => {
    // Check if the click occurred on the overlay (the background)
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <section
      className="fixed left-0 top-0 flex h-screen w-full items-center justify-center max-sm:mt-20 bg-zinc-950 bg-opacity-70 z-10"
      onClick={handleOverlayClick}
    >
      {/* Module  */}
      <div
        className="relative z-10 max-sm:min-h-[100vh] max-sm:pt-20 flex max-sm:flex-col max-sm:items-center w-full h-auto rounded-3xl bg-white shadow-lg md:max-w-[960px] overflow-y-auto border-8  border-white max-sm:rounded-none justify-center"
             >
      
        {/* Left Side */}
        <Image
    src={login_bg}
    layout="fill"
    objectFit="cover"
    alt="Background"
    className=" !relative !w-1/3 !h-auto object-cover object-center max-sm:hidden rounded-s-3xl"
    />
        <div className="flex-center  h-full absolute top-0 left-0 max-sm:hidden flex-col p-5 bg-gradient-to-t from-[#ff90299f] to-[#ac5300a1] bg-center bg-cover w-1/3 rounded-s-3xl ">
          <div className="flex-center sm:mb-10 flex-col text-center">
            <Image
              src={headerLogo}
              alt="logo"
              width={100}
              className="h-16 w-full object-contain "
            />
          </div>
          <ul className="ml-5 flex  flex-col gap-y-2 text-sm max-sm:hidden text-white list-none">
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              Personal Counsellor
            </li>
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              Admission Assistance
            </li>
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              Lowest Package Seats
            </li>
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              Expert Guidance
            </li>
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              MCI/NTA Updates
            </li>
            <li className="flex items-center">
              <FaCircleCheck className="text-green-800 bg-white rounded-full mr-2" />
              Fees Negotiation
            </li>
          </ul>
        </div>
        {/* Right Side */}
        {isLoginModule ? (
          // Sign In Container
          <SignInContainer
            setIsLoginModule={setIsLoginModule}
            isLoginModule={isLoginModule}
            closePopup={closePopup}
          />
        ) : (
          // Sign Up Container
          <SignUpContainer
            setIsLoginModule={setIsLoginModule}
            isLoginModule={isLoginModule}
            closePopup={closePopup}
          />
        )}
      </div>
    </section>
  );
}

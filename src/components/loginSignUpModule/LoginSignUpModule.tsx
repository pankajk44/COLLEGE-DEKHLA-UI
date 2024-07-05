"use client";
import React from "react";
import Image from "next/image";
import { SignInContainer } from "./SignInContainer";
import { SignUpContainer } from "./SignUpContainer";
import { headerLogo } from "@/assets";

export function LoginSignUpModule({ setIsLoginModule, isLoginModule, closePopup }: any) {
  const handleOverlayClick = (e: any) => {
    // Check if the click occurred on the overlay (the background)
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <section
      className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-blue-950 bg-opacity-70 z-10"
      onClick={handleOverlayClick}
    >
      {/* Module  */}
      <div className="relative z-10 flex max-sm:flex-col  w-full rounded bg-white shadow-lg md:max-w-[780px] max-h-[100%] overflow-y-auto">
        {/* Left Side  */}
        <div
          className=" bg-cover bg-center text-white [flex:4]"
          style={{ backgroundImage: "url('./moduleBanner.png')" }}
        >
          <div className="flex-center h-full w-full flex-col bg-blue-950 bg-opacity-70  p-5">
            <div className="flex-center sm:mb-10 flex-col text-center">
              <Image
                src={headerLogo}
                alt="logo"
                width={100}
                className="h-16 w-full object-contain"
              />
              <h2 className="text-xl font-bold">CollegeDakhla</h2>
              <p className="text-xs">India’s Best Education Consultancy</p>
            </div>
            <ul className="ml-5 flex list-disc flex-col gap-y-2 text-sm max-sm:hidden">
              <li>Personal Counsellor</li>
              <li>Admission Assistance</li>
              <li>Lowest Package Seats</li>
              <li>Expert Guidance</li>
              <li>MCI/NTA Updates</li>
              <li>Fees Negotiation</li>
            </ul>
          </div>
        </div>
        {/* Right Side  */}
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
          closePopup={closePopup} />
        )}
      </div>
    </section>
  );
}

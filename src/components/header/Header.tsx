"use client";
import React, { useState, useEffect } from "react";
import Wrapper, { Wrapper1 } from "@/components/Wrappers";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoLogOutOutline, IoMenu } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/Redux";
import { clearAuthState } from "@/Redux/authSlice";
import { useRouter } from "next/navigation";
import { LoginSignUpModule } from "../loginSignUpModule/LoginSignUpModule";
import { Button } from "../Button";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
        setShow("-translate-y-[100px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 flex h-20 w-full items-center justify-between transition-transform duration-300 md:top-5 md:h-20 ${show}`}
    >
      <Wrapper1 className="mx-5 hidden h-20 items-center justify-between rounded-lg bg-white md:flex">
        {/* Logo with Link */}
        <Link href={header?.href || "/"}>
          <Image
            src={header?.logo}
            alt="logo"
            height={100}
            className="h-[12vw] max-h-8 w-min object-contain md:h-20"
          />
        </Link>
        {/* Menu */}
        <Menu navItemsArray={navItems} />
        {/* Sign Up / Sign In  Button */}
        {/* <LoginSignUpQASection buttonType="SIGN-UP" /> */}
        <LoginSignUpQASection buttonType="LOG-IN" />
      </Wrapper1>
      {/* Mobile Section */}
      <Wrapper1 className="flex items-center justify-between gap-3 md:hidden bg-white h-20">
        {isMobileMenuOpen && (
          <MenuMobile
            navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
        <div className="flex-center relative cursor-pointer rounded-full text-3xl text-blue-950 hover:bg-blue-500/5">
          {isMobileMenuOpen ? (
            <VscChromeClose onClick={handleMobileMenu} />
          ) : (
            <IoMenu onClick={handleMobileMenu} />
          )}
        </div>
        {/* Logo with Link */}
        <Link href={header?.href || "/"}>
          <Image
            src={header?.logo}
            alt="logo"
            height={100}
            className="w-52 object-contain"
          />
        </Link>
        <LoginSignUpQASection buttonType="LOG-IN" />
      </Wrapper1>
    </header>
  );
};

export default Header;

const LoginSignUpQASection = ({ buttonType = "LOG-IN" }: any) => {
  const isUserLoggedIn = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const router = useRouter();
  const [isLoginModule, setIsLoginModule] = useState(true);

  const openLoginPopup = () => {
    setShowPopUp(true);
    document.body.style.overflow = "hidden";
    setIsLoginModule(true);
  };
  const openSignUpPopup = () => {
    setShowPopUp(true);
    document.body.style.overflow = "hidden";
    setIsLoginModule(false);
  };

  const closePopup = () => {
    setShowPopUp(false);
    document.body.style.overflow = "";
  };

  const handleLogout = () => {
    router.push("/");
    dispatch(clearAuthState());
  };

  if (buttonType === "LOG-IN") {
    return (
      <>
        <div className="flex items-center gap-4">
          {isUserLoggedIn ? (
            <div className="group relative">
              <RxAvatar className="hover:text-primary group cursor-pointer text-2xl text-orange-500" />
              <div className="absolute right-0 top-6 z-10 hidden w-max rounded-md border border-gray-200 bg-white py-1 text-sm text-zinc-600 group-hover:block">
                <Link
                  href={"/profile"}
                  className="item-center flex cursor-pointer gap-x-2 px-3 py-1 hover:bg-gray-100"
                >
                  <MdOutlinePerson className="mt-0.5" /> Profile
                </Link>
                <div
                  className="item-center flex cursor-pointer gap-x-2 px-3 py-1 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <IoLogOutOutline className="mt-0.5" /> Logout
                </div>
              </div>
            </div>
          ) : (
            <Button onClick={openLoginPopup} variant="black" className="shadow-lg">
              LogIn
            </Button>
          )}
        </div>
        {/* Pop-up Module */}
        {showPopUp && (buttonType = "LOG-IN") && (
          <LoginSignUpModule
            closePopup={closePopup}
            isLoginModule={isLoginModule}
            setIsLoginModule={setIsLoginModule}
          />
        )}
      </>
    );
  }
  // if (buttonType === "SIGN-UP") {
  //   return (
  //     <>
  //       <div className="flex items-center gap-4">
  //         {!isUserLoggedIn && (
  //           <Button
  //           variant="blackShadow"
  //             onClick={openSignUpPopup}
  //           >
  //             Sign Up
  //           </Button>
  //         )}
  //       </div>
  //       {/* Pop-up Module */}
  //       {showPopUp && (buttonType = "SIGN-UP") && (
  //         <LoginSignUpModule
  //           closePopup={closePopup}
  //           isLoginModule={isLoginModule}
  //           setIsLoginModule={setIsLoginModule}
  //         />
  //       )}
  //     </>
  //   );
  // }
};

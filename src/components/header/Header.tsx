"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
// import { useAppDispatch, useAppSelector } from "@/Redux";
// import { clearAuthState } from "@/Redux/authSlice";
import { MdOutlinePerson } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
// import { LoginSignUpModule } from "../loginSignUpModule/LoginSignUpModule";
import { RxAvatar } from "react-icons/rx";
import Wrapper from "../Wrappers";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
        setShow("-translate-y-[80px]");
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
    <Wrapper
      as="header" b
      containerClassName={`sticky top-2 z-50 flex h-20 w-[98%] mx-auto rounded-md items-center justify-between bg-white transition-transform duration-300 md:h-20 ${show}`}
      className="hidden h-20 items-center justify-between md:flex"
    >
      <div className="hidden h-20 items-center justify-between md:flex w-full">
        {/* Logo with Link */}
        <Link href={header?.href || "/"}>
          <Image
            src={header?.logo}
            alt="logo"
            height={100}
            className="h-[12vw] max-h-8 w-min object-contain md:h-20"
          />
        </Link>
        <div className="flex items-center gap-5">
          {/* Menu */}
          <Menu navItemsArray={navItems} />
          <div className="flex items-center gap-3">
            {/* Sign Up / Sign In  Button */}
            {/* <LoginSignUpQASection buttonType="SIGN-UP" />
            <LoginSignUpQASection buttonType="LOG-IN" /> */}
          </div>
        </div>
      </div>
      {/* Mobile Section */}
      <div className="flex items-center justify-between gap-2 md:hidden">
        {isMobileMenuOpen && (
          <MenuMobile
            navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
        {/* Logo with Link */}
        <Link href="/">
          <Image
            src={header?.logo}
            alt="logo"
            height={100}
            className="w-52 object-contain"
          />
        </Link>
        {/* <div className="flex items-center gap-2">
          <LoginSignUpQASection buttonType="LOG-IN" />
          <div className="flex-center relative cursor-pointer rounded-full text-3xl text-blue-950 hover:bg-blue-500/5">
            {isMobileMenuOpen ? (
              <VscChromeClose onClick={handleMobileMenu} />
            ) : (
              <BiMenuAltRight onClick={handleMobileMenu} />
            )}
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Header;

// const LoginSignUpQASection = ({ buttonType = "LOG-IN" }: any) => {
//   const isUserLoggedIn = useAppSelector((state) => state.auth.authState);
//   const dispatch = useAppDispatch();
//   const [showPopUp, setShowPopUp] = useState(false);
//   const router = useRouter();
//   const [isLoginModule, setIsLoginModule] = useState(true);

//   const openLoginPopup = () => {
//     setShowPopUp(true);
//     document.body.style.overflow = "hidden";
//     setIsLoginModule(true);
//   };
//   const openSignUpPopup = () => {
//     setShowPopUp(true);
//     document.body.style.overflow = "hidden";
//     setIsLoginModule(false);
//   };

//   const closePopup = () => {
//     setShowPopUp(false);
//     document.body.style.overflow = "";
//   };

//   const handleLogout = () => {
//     router.push("/");
//     dispatch(clearAuthState());
//   };

//   if (buttonType === "LOG-IN") {
//     return (
//       <>
//         <div className="flex items-center gap-4">
//           {isUserLoggedIn ? (
//             <div className="group relative">
//               <RxAvatar className="hover:text-primary text-blue-500 group cursor-pointer text-2xl" />
//               <div className="absolute right-0 top-6 z-10 hidden w-max rounded-md border border-gray-200 bg-white py-1 text-sm text-zinc-600 group-hover:block">
//                 <Link
//                   href={"/profile"}
//                   className="item-center flex cursor-pointer gap-x-2 px-3 py-1 hover:bg-gray-100"
//                 >
//                   <MdOutlinePerson className="mt-0.5" /> Profile
//                 </Link>
//                 <div
//                   className="item-center flex cursor-pointer gap-x-2 px-3 py-1 hover:bg-gray-100"
//                   onClick={handleLogout}
//                 >
//                   <IoLogOutOutline className="mt-0.5" /> Logout
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={openLoginPopup}
//               className="button4 rounded px-10 max-md:!px-2 max-md:!py-1 max-md:!text-sm"
//             >
//               LogIn
//             </button>
//           )}
//         </div>
//         {/* Pop-up Module */}
//         {showPopUp && (buttonType = "LOG-IN") && (
//           <LoginSignUpModule
//             closePopup={closePopup}
//             isLoginModule={isLoginModule}
//             setIsLoginModule={setIsLoginModule}
//           />
//         )}
//       </>
//     );
//   }
//   if (buttonType === "SIGN-UP") {
//     return (
//       <>
//         <div className="flex items-center gap-4">
//           {!isUserLoggedIn && (
//             <button className="button5" onClick={openSignUpPopup}>
//               Sign Up
//             </button>
//           )}
//         </div>
//         {/* Pop-up Module */}
//         {showPopUp && (buttonType = "SIGN-UP") && (
//           <LoginSignUpModule
//             closePopup={closePopup}
//             isLoginModule={isLoginModule}
//             setIsLoginModule={setIsLoginModule}
//           />
//         )}
//       </>
//     );
//   }
// };

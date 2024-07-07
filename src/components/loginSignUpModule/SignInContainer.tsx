"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";
// import useSignup from "@/query/hooks/useSignup";
// import useUserMetaData from "@/query/hooks/useUserMetaData";
// import { useAppDispatch } from "@/Redux";
// import { useQuery } from "@apollo/client";
// import { getStreams, getCourseLevels } from "@/query/schema";
// import { restUrl } from "@/utils/network";
// import { setAuthState } from "@/Redux/authSlice";
// import { ID, UserSubmittedData } from "@/types/global";
import OtpInput from "react-otp-input";
import { Input } from "./Input";
import { FaRegEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export function SignInContainer({
  setIsLoginModule,
  isLoginModule,
  closePopup,
}: any) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  const [error, setError] = useState("");
  const [userSubmittedData, setuserSubmittedData] = useState<any>({
    number: "",
  });

  const [userOtp, setUserOtp] = useState("");
  // const [userId, setUserId] = useState<ID>();
  const [isOtp, setIsOtp] = useState(false);
  // const { UserCheck, CheckOTP } = useSignup();
  // const { userMetaCreate } = useUserMetaData();
  // const dispatch = useAppDispatch();
  // const { data: streamsData } = useQuery(getStreams);
  // const { data: courseLevelData } = useQuery(getCourseLevels);
  // const checkUser = UserCheck(
  //   userSubmittedData?.number,
  //   userSubmittedData?.email,
  // );
  // const otpchecker = CheckOTP(userId!, userSubmittedData?.number, userOtp);

  async function sendSignupOtp() {
    // const currentDate = new Date();
    // const publishedAt = currentDate.toISOString();
    // if ((await checkUser) === false) {
    //   try {
    //     let data = JSON.stringify({
    //       data: {
    //         name: userSubmittedData.name,
    //         email: userSubmittedData.email,
    //         number: userSubmittedData.number,
    //         stream: userSubmittedData.stream,
    //         courseLevel: userSubmittedData.courseLevel,
    //       },
    //     });
    //     let config = {
    //       method: "post",
    //       maxBodyLength: Infinity,
    //       url: `${restUrl}/api/users-data`,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       data: data,
    //     };
    //     axios
    //       .request(config)
    //       .then((response: any) => {
    //         setUserId(response?.data?.data?.id);
    //         setIsOtp(true);
    //       })
    //       .catch((error: any) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.error("Error adding user:", error);
    //   }
    // } else {
    //   setError("User already exists");
    // }
  }

  async function handleSubmitSignup() {
    // const currentDate = new Date();
    // const publishedAt = currentDate.toISOString();
    // if (otpchecker != false) {
    //   try {
    //     dispatch(
    //       setAuthState({
    //         authState: true,
    //         userID: otpchecker?.loggedInUser?.id,
    //         userName: otpchecker?.loggedInUser?.attributes?.name,
    //         email: otpchecker?.loggedInUser?.attributes?.email,
    //         number: otpchecker?.loggedInUser?.attributes?.number,
    //       }),
    //     );
    //     await userMetaCreate({
    //       variables: {
    //         name: userSubmittedData.name,
    //         email: userSubmittedData.email,
    //         number: userSubmittedData.number,
    //         userDataId: userId,
    //         publishedAt,
    //       },
    //     });
    //     console.log("user signed up");
    //     closePopup();
    //     router.push("/");
    //   } catch (error) {
    //     console.error("Error publishing user:", error);
    //   }
    // } else {
    //   setError("Wrong OTP");
    // }
  }

  const handleFormSubmit = async (data: any) => {
    //   setuserSubmittedData(data);
    //   isOtp ? handleSubmitSignup() : sendSignupOtp();
  };
  const handleOverlayClick = (e: any) => {
    //   // Check if the click occurred on the overlay (the background)
    //   if (e.target === e.currentTarget) {
    //     closePopup();
    //   }
  };

  // Regular expressions for validation
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <div className="sm:relative flex h-full flex-col  overflow-y-auto  p-6 py-10  text-black [flex:6] md:justify-center">
      <button
        className="absolute right-[0.05rem] top-[0.05rem] w-max p-3  text-lg font-normal text-zinc-600  hover:underline"
        onClick={closePopup}
        type="button"
      >
        <ImCross />
      </button>
      <h2 className="text-3xl font-semibold max-sm:text-center mb-8">
        Confused with the Admission process to your dream college? Register with
        us{" "}
      </h2>
      <h3 className="text-xl ">Continue with mobile </h3>
      <p className="text-xs">You&apos;ll receive a 4 digit code to verify next</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isOtp ? (
          <>
            <p className="mt-5 flex gap-x-2">
              <span>OTP will be sent to </span>
              <span className="text-xl font-bold text-blue-500">
                {userSubmittedData.number || 999999999}
              </span>
              <span onClick={() => setIsOtp((pre) => !pre)}>
                <FaRegEdit className="text-blue-500" />
              </span>
            </p>
            <div className="otp mb-5">
              <OtpInput
                inputStyle="OTPInputStyle"
                inputType="number"
                value={userOtp}
                onChange={setUserOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
                placeholder={"______"}
              />
            </div>
          </>
        ) : (
          <>
            {/* Mobile No.  */}
            <Input
              label="Mobile No "
              type="phone"
              placeholder=" "
              maxLength={10}
              {...register("number", {
                required: "Mobile No. is required",
                pattern: {
                  value: mobileRegex,
                  message: "Please enter a valid 10-digit mobile number",
                },
              })}
            />
            {errors.number && (
              <p className="text-xs text-red-600">{errors.number.message}</p>
            )}
          </>
        )}
     

        <div className="mt-5 flex items-center">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  value=""
                  className="peer sr-only"
                  {...register("isWhatsappNo", {})}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-orange-600 dark:peer-focus:ring-orange-800"></div>
              </label>
              <span className="ml-3 font-sans text-sm leading-normal  text-inherit antialiased">
              Enable updated & important information on Whatsapp.
              </span>
            </div>

            <button
          className="mt-8 w-full rounded-lg  bg-gradient-to-b from-[#FF772B] to-[#fd6107]  px-3 py-2 text-white outline-none duration-200 hover:font-bold active:scale-95"
          type="submit"
        >
          {isOtp ? "LogIn" : "Send OTP"}
        </button>
        <button className="mt-5 text-smbg-gradient-to-b from-[#FF772B] to-[#fd6107]  hover:underline active:scale-95">
          {isOtp && "Resend OTP"}
        </button>
      </form>

      <p className="mt-2 font-medium text-zinc-600 text-center font-sans text-sm leading-normal text-inherit antialiased">
      Your personal information is secured with us
      </p>
      <p className="mt-6 font-bold text-base text-zinc-600 w-full  text-left font-sans  leading-normal  antialiased">
      New on OnlinewalaCollege?
        <span
          onClick={() => setIsLoginModule(!isLoginModule)}
          className="ml-1 text-orange-500 hover:underline"
        >
          SignUp Now!
        </span>
      </p>
      {/* Error Message */}
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

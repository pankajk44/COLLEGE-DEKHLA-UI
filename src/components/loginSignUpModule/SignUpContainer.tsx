"use client";
// import { logoSmall } from "@/asset";
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
import { ImCross } from "react-icons/im";

export function SignUpContainer({
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
    name: "",
    email: "",
    number: "",
    isWhatsappNo: false,
    stream: "",
    courseLevel: "",
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

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <div className="sm:relative flex min-h-[90vh] flex-col md:justify-center rounded-b rounded-r p-8 text-black [flex:6] overflow-y-auto">
       <button
        className="absolute right-[0.05rem] top-[0.05rem] w-max p-3  text-lg font-normal text-zinc-600  hover:underline"
        onClick={closePopup}
        type="button"
      >
        <ImCross />
      </button>
      <h1 className="text-2xl font-bold text-zinc-800">
      To Sign Up,
      </h1>
      <p>Please enter the following details</p>
      <p className="mt-1 font-semibold text-zinc-600 flex w-full  font-sans text-md leading-normal text-inherit antialiased">
        Already have an account?
        <span
          onClick={() => setIsLoginModule(!isLoginModule)}
          className="ml-1 block cursor-pointer font-sans  font-bold leading-normal  text-orange-600 antialiased hover:underline"
        >
          LogIn Now!
        </span>
      </p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isOtp ? (
          <>
            <p className="mt-5">
              <span>Enter OTP </span>
              <span className="text-xl font-bold text-orange-500">
                {userSubmittedData.number}
              </span>
            </p>
            <div className="otp mb-5">
  <OtpInput
    value={userOtp}
    onChange={setUserOtp}
    numInputs={6}
    renderSeparator={<span className="mx-2"></span>}
    renderInput={(props) => (
      <input
        {...props}
        className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:border-orange-500 focus:outline-none"
        style={{
          WebkitAppearance: "none",
          MozAppearance: "textfield"
        }}
      />
    )}
    shouldAutoFocus
    inputType="tel"
  />
</div>
          </>
        ) : (
          <>
            <Input
              label="Name "
              placeholder=" "
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors?.name && (
              <p className="text-xs text-red-600">{errors?.name?.message}</p>
            )}
            {/* Mobile No.  */}
            <Input
              label="Date of Birth"
              type="date"
              placeholder=" "
              // maxLength={10}
              // {...register("number", {
              //   required: "Date of Birth No. is required",
              //   pattern: {
              //     value: mobileRegex,
              //     message: "Please enter a valid 10-digit mobile number",
              //   },
              // })}
            />
            <Input
              label="Mobile Number"
              type="Number"
              placeholder=""
              // maxLength={10}
              {...register("number", {
                required: "Date of Birth No. is required",
                pattern: {
                  value: mobileRegex,
                  message: "Please enter a valid 10-digit mobile number",
                },
              })}
            />
            {errors.number && (
              <p className="text-xs text-red-600">{errors.number.message}</p>
            )}
            {/* Email  */}
            <Input
              label="Email ID "
              type="email"
              placeholder=" "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            )}
            {/* Stream  */}
            <select
              className="mt-5 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-zinc-300"
              {...register("stream", {
                required: "Stream Selection is required",
              })}
            >
              <option disabled={true} selected={true} value="">
                Course
              </option>
              {/* {streamsData?.streams?.data?.map(
                    (stream: any, index: any) => {
                      return (
                        <option value={stream?.id} key={index}>
                          {stream?.attributes?.streamName}
                        </option>
                      );
                    },
                  )} */}
            </select>
            {errors.stream && (
              <p className="text-xs text-red-600">{errors.stream.message}</p>
            )}
            {/* courseLevel  */}
            <select
              className="mt-5  rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-zinc-300 w-[48%]"
              {...register("courseLevel", {
                required: "course Level Selection is required",
              })}
            >
              <option disabled={true} selected={true} value="">
State              </option>
              {/* {courseLevelData?.courseLevels?.data?.map(
                    (courseLevel: any, index: any) => {
                      return (
                        <option value={courseLevel?.id} key={index}>
                          {courseLevel?.attributes?.levelName}
                        </option>
                      );
                    },
                  )} */}
            </select>
            <select
              className="mt-5  rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-zinc-300 w-[48%] ml-[4%]"
              {...register("courseLevel", {
                required: "course Level Selection is required",
              })}
            >
              <option disabled={true} selected={true} value="">
                City
              </option>
              {/* {courseLevelData?.courseLevels?.data?.map(
                    (courseLevel: any, index: any) => {
                      return (
                        <option value={courseLevel?.id} key={index}>
                          {courseLevel?.attributes?.levelName}
                        </option>
                      );
                    },
                  )} */}
            </select>
            {errors.courseLevel && (
              <p className="text-xs text-red-600">
                {errors.courseLevel.message}
              </p>
            )}
            {/* Whatsapp No. Check  */}
            {/* <div className="mt-5 flex items-center">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  value=""
                  className="peer sr-only"
                  {...register("isWhatsappNo", {})}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-blue-700 dark:peer-focus:ring-blue-800"></div>
              </label>
              <span className="ml-3 font-sans text-sm leading-normal  text-inherit antialiased">
                Whatsapp number is the same as provided above
              </span>
            </div> */}
          </>
        )}
        <button
          className="mt-5 w-full rounded-lg bg-gradient-to-b from-[#FF772B] to-[#fd6107] px-3 py-2 text-white outline-none duration-200 hover:font-bold active:scale-95"
          type="submit"
        >
          {isOtp ? "Sign Up" : "Send OTP"}
        </button>
        <button className="mt-5 text-sm text-orange-600 hover:underline active:scale-95">
          {isOtp && "Resend OTP"}
        </button>
      </form>

      <p className="mt-2 text-center font-sans text-sm leading-normal text-inherit antialiased">
      Your personal information is secured with us
      </p>
     
      {/* Error Message */}
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

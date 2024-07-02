"use client";
import { logoSmall } from "@/asset";
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
        className="absolute right-[0.05rem] top-[0.05rem] w-max p-3  text-sm text-blue-500 hover:underline"
        onClick={closePopup}
        type="button"
      >
        Close
      </button>
      <h1 className="sm:text-lg font-bold text-zinc-800">
        Confused with the Admission process to your dream college? Register with
        us
      </h1>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isOtp ? (
          <>
            <p className="mt-5">
              <span>OTP will be sent to </span>
              <span className="text-xl font-bold text-blue-500">
                {userSubmittedData.number}
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
                Please select Preferred Stream
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
              className="mt-5 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-zinc-300"
              {...register("courseLevel", {
                required: "course Level Selection is required",
              })}
            >
              <option disabled={true} selected={true} value="">
                Please select Preferred Level
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
            <div className="mt-5 flex items-center">
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
            </div>
          </>
        )}
        <button
          className="mt-5 w-full rounded-lg  bg-blue-500 px-3 py-2 text-white outline-none duration-200 hover:font-bold active:scale-95"
          type="submit"
        >
          {isOtp ? "Sign Up" : "Send OTP"}
        </button>
        <button className="mt-5 text-sm text-blue-600 hover:underline active:scale-95">
          {isOtp && "Resend OTP"}
        </button>
      </form>

      <p className="mt-5 text-center font-sans text-sm leading-normal text-inherit antialiased">
        By proceeding ahead you expressly agree to the Acchawalacollege{" "}
        <Link href="#" className=" text-blue-600   hover:underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="#" className=" text-blue-600 hover:underline">
          Privacy Policy
        </Link>
      </p>
      <p className="mt-3 flex w-full justify-center text-center font-sans text-sm leading-normal text-inherit antialiased">
        Already have an account?
        <p
          onClick={() => setIsLoginModule(!isLoginModule)}
          className="ml-1 block cursor-pointer font-sans text-sm font-bold leading-normal  text-blue-600 antialiased hover:underline"
        >
          LogIn Now!
        </p>
      </p>
      {/* Error Message */}
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

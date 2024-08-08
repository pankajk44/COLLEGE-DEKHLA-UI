"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/FormInput";
import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useQuery } from "@apollo/client";
import {
  allCityRelatedToStateSelected,
  allCourses,
  allStates,
} from "@/graphql/authQuery/signup";
import useUserData from "@/customHook/useProfile";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";

export function YourDetails({ setNextButtonState }: any) {
  const [error, setError] = useState("");
  const [selectedStateId, setSelectedStateId] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      courses: "",
      state: "",
      city: "",
      gender: "",
    },
  });

  const {
    data: userProfileData,
    loading: userProfileLoading,
    error: userProfileError,
  } = useUserData();

  const {
    loading: allCoursesLoading,
    error: allCoursesError,
    data: allCoursesData,
  } = useQuery(allCourses);

  const {
    loading: allStatesLoading,
    error: allStatesError,
    data: allStatesData,
  } = useQuery(allStates);

  const {
    loading: cityRelatedLoading,
    error: cityRelatedError,
    data: cityRelatedData,
  } = useQuery(allCityRelatedToStateSelected, {
    variables: { stateId: selectedStateId },
    skip: !selectedStateId,
  });

  useEffect(() => {
    if (userProfileData) {
      const userStateId = userProfileData?.attributes?.state?.data?.id || "";
      setSelectedStateId(userStateId);
      reset({
        name: userProfileData?.attributes?.username || "",
        email: userProfileData?.attributes?.email || "",
        number: userProfileData?.attributes?.phoneNumber || "",
        courses: userProfileData?.attributes?.course?.data?.id || "",
        state: userStateId,
        city: userProfileData?.attributes?.city?.data?.id || "",
        gender: userProfileData?.attributes?.gender || "",
      });
    }
  }, [userProfileData, reset]);

  // Set city value based on selected state
  useEffect(() => {
    if (selectedStateId && cityRelatedData?.cities?.data) {
      setValue("city", userProfileData?.attributes?.city?.data?.id || "");
    }
  }, [
    selectedStateId,
    cityRelatedData?.cities?.data,
    userProfileData?.attributes?.city?.data?.id,
  ]);

  const handleFormSubmit = async (data: any) => {
    setNextButtonState(true);
    try {
      console.log(data);
      // Handle the form data
    } catch (err) {
      console.error(err);
      setError("An error occurred while saving your details.");
    } finally {
      setNextButtonState(false);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <Input
            label="Full Name"
            type="text"
            readOnly
            icon={<FaEdit />}
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors?.name && (
            <p className="text-xs text-red-600">{errors?.name?.message}</p>
          )}
        </div>
        {/* Email */}
        <div className="space-y-2">
          <Input
            label="Email ID"
            type="email"
            icon={<MdOutlineAttachEmail />}
            {...register("email", {
              disabled: true,
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
        </div>
        {/* Mobile No. */}
        <div className="space-y-2">
          <Input
            label="Mobile Number"
            type="text"
            icon={<CiMobile4 />}
            {...register("number", {
              disabled: true,
              required: "Mobile number is required",
              pattern: {
                value: mobileRegex,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.number && (
            <p className="text-xs text-red-600">{errors?.number?.message}</p>
          )}
        </div>
        {/* Course */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("courses")}
          >
            <option value="">Select course you are interested in</option>
            {allCoursesData?.courses?.data?.map((course: any) => (
              <option value={course?.id} key={course?.id}>
                {course?.attributes?.breadCrumb}
              </option>
            ))}
          </select>
          {errors.courses && (
            <p className="text-xs text-red-600">{errors?.courses?.message}</p>
          )}
        </div>
        {/* State */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("state", {
              required: "Selecting state is required",
            })}
            onChange={(e) => {
              const stateId = e.target.value;
              setSelectedStateId(stateId);
              setValue("state", stateId);
              setValue("city", ""); // Reset city when state changes
            }}
          >
            <option value="">State</option>
            {allStatesData?.states?.data?.map((state: any) => (
              <option value={state?.id} key={state?.id}>
                {state?.attributes?.state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-xs text-red-600">{errors?.state?.message}</p>
          )}
        </div>
        {/* City */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("city", {
              required: "City selection is required",
            })}
          >
            <option value="">City</option>
            {cityRelatedData?.cities?.data?.map((city: any) => (
              <option value={city?.id} key={city?.id}>
                {city?.attributes?.city}
              </option>
            ))}
          </select>
          {errors.city && (
            <p className="text-xs text-red-600">{errors?.city?.message}</p>
          )}
        </div>
        {/* Gender */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("gender")}
          >
            <option value="">Gender</option>
            {["female", "male", "other"].map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p className="text-xs text-red-600">{errors?.gender?.message}</p>
          )}
        </div>
        <div className="space-y-2"></div>
        <Button variant="orangeMain" type="submit">
          Save
        </Button>
      </form>
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

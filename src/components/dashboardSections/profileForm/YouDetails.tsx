"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { Input } from "@/components/FormInput";
import { FaEdit, FaTransgenderAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { LiaCitySolid } from "react-icons/lia";
import { Button } from "@/components/Button";

export function YourDetails({ setNextButtonState }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  }: any = useForm({
    defaultValues: {
      name: "Pankaj Kumar",
      email: "",
      number: "",
      courses: "",
      city: "",
      gender: "male",
    },
  });
  const [error, setError] = useState("");

  const handleFormSubmit = async (data: any) => {
    setNextButtonState(true);
    try {
      console.log(data);
      setNextButtonState(false);
    } catch (err) {
      console.log(err);
      setNextButtonState(false);
    }
  };

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {/* Full Name  */}
        <div className="space-y-2">
          <Input
            label="Full Name"
            type="text"
            readyOnly={true}
            icon={<FaEdit />}
            {...register("name", {
              disabled: true,
              required: "Name is required",
            })}
          />
          {errors?.name && (
            <p className="text-xs text-red-600">{errors?.name?.message}</p>
          )}
        </div>
        {/* Email  */}
        <div className="space-y-2">
          <Input
            label="Email ID "
            type="email"
            icon={<MdOutlineAttachEmail />}
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
        </div>
        <div className="space-y-2">
          {/* Mobile No.  */}
          <Input
            label="Mobile Number"
            type="Number"
            icon={<CiMobile4 />}
            {...register("number", {
              required: "Date of Birth No. is required",
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
        {/* Course  */}
        <div className="space-y-2">
          <Input
            label="Course Interested"
            type="text"
            icon={<FiBook />}
            readyOnly={true}
            {...register("course")}
          />
          {errors.number && (
            <p className="text-xs text-red-600">{errors?.number?.course}</p>
          )}
        </div>
        {/* City  */}
        <div className="space-y-2">
          <Input
            label="Course Interested"
            type="text"
            city={<LiaCitySolid />}
            readyOnly={true}
            disabled={true}
            {...register("city")}
          />
          {errors.number && (
            <p className="text-xs text-red-600">{errors?.number?.course}</p>
          )}
        </div>
        {/* Gender  */}
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("gender")}
          >
            {["female", "male", "other"]?.map((item) => (
              <option key={item} value={item} className="capitalize">
                {item}
              </option>
            ))}
          </select>
          {errors.number && (
            <p className="text-xs text-red-600">{errors?.gender?.message}</p>
          )}
        </div>
        <Button variant="orangeMain" type="submit">
          Save
        </Button>
      </form>
      {/* Error Message */}
      {error && <p className="mt-5 text-center text-red-600">{error}</p>}
    </div>
  );
}

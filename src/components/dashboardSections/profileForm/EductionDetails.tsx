"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/FormInput";
import { Button } from "@/components/Button";

export function EducationDetails({ setNextButtonState }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm({
    defaultValues: {
      graduationInstitutionName: "",
      graduationPassingYear: "",
      graduationCourse: "Course",
      graduationGradingSystem: "",
      graduationPercentageGrades: "",

      twelfthSchoolName: "",
      twelfthCity: "",
      twelfthPassingYear: "",
      twelfthStream: "Stream",
      twelfthGradingSystem: "",
      twelfthPercentageGrades: "",

      tenthSchoolName: "",
      tenthCity: "",
      tenthPassingYear: "",
      tenthStream: "Stream",
      tenthGradingSystem: "",
      tenthPercentageGrades: "",

      isEntranceExam: "",
      entranceExamName: "",
      entranceExamScore: "",
    },
  });
  const [error, setError] = useState("");

  const handleFormSubmit = async (data: any) => {
    setNextButtonState(true);
    try {
      // console.log(data);
      setNextButtonState(false);
    } catch (err) {
      // console.log(err);
      setNextButtonState(false);
    }
  };

  const onNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setNextButtonState(false);
      return true;
    } else {
      setNextButtonState(true);
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-10">
      {/* Graduation Educational Details */}
      <div>
        <h2 className="text-xl font-bold">Graduation Educational Details</h2>
        <div className="space-y-2">
          <Input
            label="Institution Name"
            type="text"
            {...register("graduationInstitutionName", {
              required: "Institution Name is required",
            })}
          />
          {errors.graduationInstitutionName && (
            <p className="text-xs text-red-600">
              {errors.graduationInstitutionName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            label="Passing Year"
            type="date"
            {...register("graduationPassingYear", {
              required: "Passing Year is required",
            })}
          />
          {errors.graduationPassingYear && (
            <p className="text-xs text-red-600">
              {errors.graduationPassingYear.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("graduationCourse")}
          >
            {["B.tech", "M.tech", "other"].map((item) => (
              <>
                <option className="capitalize">Course</option>
                <option key={item} value={item} className="capitalize">
                  {item}
                </option>
              </>
            ))}
          </select>
          {errors.graduationCourse && (
            <p className="text-xs text-red-600">
              {errors.graduationCourse.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              label="Grading System"
              type="text"
              {...register("graduationGradingSystem", {
                required: "Grading System is required",
              })}
            />
            {errors.graduationGradingSystem && (
              <p className="text-xs text-red-600">
                {errors.graduationGradingSystem.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              label="Percentage/Grades"
              type="text"
              {...register("graduationPercentageGrades", {
                required: "Percentage/Grades is required",
              })}
            />
            {errors.graduationPercentageGrades && (
              <p className="text-xs text-red-600">
                {errors.graduationPercentageGrades.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Twelfth Educational Details */}
      <div>
        <h2 className="text-xl font-bold">12th Educational Details</h2>
        <div className="space-y-2">
          <Input
            label="School Name"
            type="text"
            {...register("twelfthSchoolName", {
              required: "School Name is required",
            })}
          />
          {errors.twelfthSchoolName && (
            <p className="text-xs text-red-600">
              {errors.twelfthSchoolName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            label="City"
            type="text"
            {...register("twelfthCity", {
              required: "City is required",
            })}
          />
          {errors.twelfthCity && (
            <p className="text-xs text-red-600">{errors.twelfthCity.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            label="Passing Year"
            type="date"
            {...register("twelfthPassingYear", {
              required: "Passing Year is required",
            })}
          />
          {errors.twelfthPassingYear && (
            <p className="text-xs text-red-600">
              {errors.twelfthPassingYear.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("twelfthStream")}
          >
            {["Science", "Commerce", "Arts"].map((item) => (
              <>
                <option className="capitalize">Stream</option>
                <option key={item} value={item} className="capitalize">
                  {item}
                </option>
              </>
            ))}
          </select>
          {errors.twelfthStream && (
            <p className="text-xs text-red-600">
              {errors.twelfthStream.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              label="Grading System"
              type="text"
              {...register("twelfthGradingSystem", {
                required: "Grading System is required",
              })}
            />
            {errors.twelfthGradingSystem && (
              <p className="text-xs text-red-600">
                {errors.twelfthGradingSystem.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              label="Percentage/Grades"
              type="text"
              {...register("twelfthPercentageGrades", {
                required: "Percentage/Grades is required",
              })}
            />
            {errors.twelfthPercentageGrades && (
              <p className="text-xs text-red-600">
                {errors.twelfthPercentageGrades.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tenth Educational Details */}
      <div>
        <h2 className="text-xl font-bold">10th Educational Details</h2>
        <div className="space-y-2">
          <Input
            label="School Name"
            type="text"
            {...register("tenthSchoolName", {
              required: "School Name is required",
            })}
          />
          {errors.tenthSchoolName && (
            <p className="text-xs text-red-600">
              {errors.tenthSchoolName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            label="City"
            type="text"
            {...register("tenthCity", {
              required: "City is required",
            })}
          />
          {errors.tenthCity && (
            <p className="text-xs text-red-600">{errors.tenthCity.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            label="Passing Year"
            type="date"
            {...register("tenthPassingYear", {
              required: "Passing Year is required",
            })}
          />
          {errors.tenthPassingYear && (
            <p className="text-xs text-red-600">
              {errors.tenthPassingYear.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <select
            className="mt-5 h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-zinc-500 outline-none duration-200 focus:outline-orange-500"
            {...register("tenthStream")}
          >
            {["Science", "Commerce", "Arts"].map((item) => (
              <>
                <option className="capitalize">Stream</option>
                <option key={item} value={item} className="capitalize">
                  {item}
                </option>
              </>
            ))}
          </select>
          {errors.tenthStream && (
            <p className="text-xs text-red-600">{errors.tenthStream.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              label="Grading System"
              type="text"
              {...register("tenthGradingSystem", {
                required: "Grading System is required",
              })}
            />
            {errors.tenthGradingSystem && (
              <p className="text-xs text-red-600">
                {errors.tenthGradingSystem.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              label="Percentage/Grades"
              type="text"
              {...register("tenthPercentageGrades", {
                required: "Percentage/Grades is required",
              })}
            />
            {errors.tenthPercentageGrades && (
              <p className="text-xs text-red-600">
                {errors?.tenthPercentageGrades.message}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Have you appeared or scheduled for any entrance exams?  */}
      <div>
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">
            Have you appeared or scheduled for any entrance exams?
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="yes"
                {...register("isEntranceExam")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="no"
                {...register("isEntranceExam")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="booked"
                {...register("isEntranceExam")}
                className="form-radio"
              />
              <span className="ml-2">Booked</span>
            </label>
          </div>
          {errors.isEntranceExam && (
            <p className="text-xs text-red-600">
              {errors.isEntranceExam.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {(watch("isEntranceExam") === "yes" ||
            watch("isEntranceExam") === "booked") && (
            <div className="space-y-2">
              <Input
                label="Entrance Exam Name"
                type="text"
                {...register("entranceExamName", {
                  required: "Entrance Exam Name is required",
                })}
              />
              {errors.entranceExamName && (
                <p className="text-xs text-red-600">
                  {errors.entranceExamName.message}
                </p>
              )}
            </div>
          )}
          {watch("isEntranceExam") === "yes" && (
            <div className="space-y-2">
              <Input
                label="Entrance Score"
                type="text"
                {...register("entranceExamScore", {
                  required: "Entrance Score is required",
                })}
              />
              {errors.entranceExamScore && (
                <p className="text-xs text-red-600">
                  {errors?.entranceExamScore?.message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <Button variant="orangeMain" type="submit">
        Save
      </Button>
    </form>
  );
}

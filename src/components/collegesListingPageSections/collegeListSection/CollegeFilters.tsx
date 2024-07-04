"use client";
import Filter from "@/components/filters/filter1";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function CollegeFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,
}: any) {
  // Filter Checked
  const [StreamCheckedFilters, setStreamCheckedFilters] = useState<string[]>(
    [],
  );
  const [CourseCheckedDurationFilters, setCourseDurationFilters] =
    useState<number>(0);
  const [StateCheckedFilters, setStateCheckedFilter] = useState<string[]>([]);
  const [CityCheckedFilters, setCityCheckedFilter] = useState<string[]>([]);
  const [CoursesCheckedFilters, setCoursesCheckedFilters] = useState<string[]>(
    [],
  );
  const [ProgramTypeCheckedFilters, setProgramTypeCheckedFilters] = useState<
    string[]
  >([]);
  const [CollegeTypeCheckedFilters, setCollegeTypeCheckedFilters] = useState<
    string[]
  >([]);
  const [AvgFeePerYearCheckedFilters, setAvgFeePerYearCheckedFilters] =
    useState<string>("");
  const [CollegeCategoryCheckedFilters, setCollegeCategoryCheckedFilters] =
    useState<string[]>([]);
  const [AffiliationCheckedFilters, setAffiliationCheckedFilters] = useState<
    string[]
  >([]);
  const [GenderCheckedFilters, setGenderCheckedFilters] = useState<string>("");
  const [RankingCheckedFilters, setRankingCheckedFilters] =
    useState<string>("");
  const [ExamCheckedFilters, setExamCheckedFilters] = useState<string[]>([]);

  // handleFilter functions
  const handleStreamFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = StreamCheckedFilters.includes(data)
      ? StreamCheckedFilters.filter((item) => item !== data)
      : [...StreamCheckedFilters, data];
    setStreamCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      stream: updatedSelection,
    }));
  };

  const handleCourseDurationFilter = (data: any) => {
    setCourseDurationFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      courseDuration: data,
    }));
  };

  const handleAvgFeePerYearFilter = (data: any) => {
    setAvgFeePerYearCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      avgFeePerYear: data,
    }));
  };

  const handleStateFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = StateCheckedFilters.includes(data)
      ? StateCheckedFilters.filter((item) => item !== data)
      : [...StateCheckedFilters, data];
    setStateCheckedFilter(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      state: updatedSelection,
    }));
  };

  const handleCityFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = CityCheckedFilters.includes(data)
      ? CityCheckedFilters.filter((item) => item !== data)
      : [...CityCheckedFilters, data];
    setCityCheckedFilter(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      city: updatedSelection,
    }));
  };

  const handleCourseFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = CoursesCheckedFilters.includes(data)
      ? CoursesCheckedFilters.filter((item) => item !== data)
      : [...CoursesCheckedFilters, data];
    setCoursesCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      course: updatedSelection,
    }));
  };

  const handleProgramTypeFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = ProgramTypeCheckedFilters.includes(data)
      ? ProgramTypeCheckedFilters.filter((item) => item !== data)
      : [...ProgramTypeCheckedFilters, data];
    setProgramTypeCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      programType: updatedSelection,
    }));
  };

  const handleCollegeTypeFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = CollegeTypeCheckedFilters.includes(data)
      ? CollegeTypeCheckedFilters.filter((item) => item !== data)
      : [...CollegeTypeCheckedFilters, data];
    setCollegeTypeCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      collegeType: updatedSelection,
    }));
  };

  const handleCollegeCategoryFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = CollegeCategoryCheckedFilters.includes(data)
      ? CollegeCategoryCheckedFilters.filter((item) => item !== data)
      : [...CollegeCategoryCheckedFilters, data];
    setCollegeCategoryCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      collegeCategory: updatedSelection,
    }));
  };

  const handleAffiliationFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = AffiliationCheckedFilters.includes(data)
      ? AffiliationCheckedFilters.filter((item) => item !== data)
      : [...AffiliationCheckedFilters, data];
    setAffiliationCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      affiliation: updatedSelection,
    }));
  };

  const handleGenderFilter = (data: any) => {
    setGenderCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      genderAccepted: data,
    }));
  };

  const handleRankingFilter = (data: any) => {
    setRankingCheckedFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      ranking: data,
    }));
  };

  const handleExamFilter = (data: any) => {
    // Toggle the selection
    const updatedSelection = ExamCheckedFilters.includes(data)
      ? ExamCheckedFilters.filter((item) => item !== data)
      : [...ExamCheckedFilters, data];
    setExamCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      examAccepted: updatedSelection,
    }));
  };

  // function to remove filters from selected filter
  const handleUnselectFilter = (filter?: string, name?: string) => {
    if (filter === "stream") {
      setStreamCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        stream: [],
      }));
    } else if (filter === "state") {
      setStateCheckedFilter([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        state: [],
      }));
    } else if (filter === "city") {
      setCityCheckedFilter([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        city: [],
      }));
    } else if (filter === "courses") {
      setCoursesCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        courses: [],
      }));
    } else if (filter === "programType") {
      setProgramTypeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        programType: [],
      }));
    } else if (filter === "collegeType") {
      setCollegeTypeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        collegeType: [],
      }));
    } else if (filter === "courseDuration") {
      setCourseDurationFilters(0);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        courseDuration: 0,
      }));
    } else if (filter === "avgFeePerYear") {
      setAvgFeePerYearCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        avgFeePerYear: "",
      }));
    } else if (filter === "collegeCategory") {
      setCollegeCategoryCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        collegeCategory: [],
      }));
    } else if (filter === "affiliation") {
      setAffiliationCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        affiliation: [],
      }));
    } else if (filter === "genderAccepted") {
      setGenderCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        genderAccepted: "",
      }));
    } else if (filter === "ranking") {
      setRankingCheckedFilters("");
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        ranking: "",
      }));
    } else if (filter === "examAccepted") {
      setExamCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        examAccepted: [],
      }));
    }
  };

  return (
    <aside
      className={`min-w-[300px] px-3 [flex:2] max-md:bg-black max-md:bg-opacity-80  ${mobileFilter ? "fixed left-0 top-0 z-40 h-screen w-full overflow-y-scroll pr-[20%]" : "max-md:hidden"}`}
    >
      <button
        className="fixed right-5 top-24 text-3xl text-white md:hidden"
        onClick={() => setMobileFilter(false)}
      >
        <IoIosCloseCircleOutline />
      </button>
      <h1 className="mb-10 font-medium max-md:mt-0">
        Showing {totalResults} Colleges
      </h1>
      <div className="w-full rounded border-2 border-zinc-300 bg-white p-5 pb-0 max-md:bg-opacity-95">
        <h2 className="mb-5 font-medium">Find colleges</h2>
        {/* Selected filters display */}
        <div className="flex flex-wrap items-center gap-1">
          {Object.values(SelectedFilters).some(
            (value) =>
              value !== "" &&
              value !== 0 &&
              (!Array.isArray(value) || value.length !== 0),
          ) && <span className="text-xs font-bold">Filters Applied : </span>}
          {Object.entries(SelectedFilters).map(([key, value]: any) => {
            if (Array.isArray(value)) {
              // If the value is an array, join its elements with commas
              value = value.join(" , ");
            } else if (key === "courseDuration") {
              const duration: any =
                typeof value === "string" ? parseInt(value) : value;
              return (
                value !== "" &&
                value !== 0 && (
                  <div
                    key={key}
                    className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                  >
                    <span>
                      {Math.floor(duration / 12)} years {duration % 12} months
                    </span>
                    <button
                      onClick={() => handleUnselectFilter(key, value as string)}
                    >
                      <MdClose />
                    </button>
                  </div>
                )
              );
            }
            return (
              value !== "" &&
              (!Array.isArray(value) || value.length !== 0) && (
                <div
                  key={key}
                  className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                >
                  <span className="max-w-[150px] text-wrap">{value}</span>
                  <button onClick={() => handleUnselectFilter(key, value)}>
                    <MdClose />
                  </button>
                </div>
              )
            );
          })}
        </div>
        {/*END  shows filter by options  */}

        {/* Filters  */}
        <Filter
          title="STREAM"
          filterList={filterBy?.stream}
          handleFilter={handleStreamFilter}
          checked={StreamCheckedFilters}
        />
        <Filter
          title="COURSE DURATION"
          filterList={filterBy?.courseDuration}
          handleFilter={handleCourseDurationFilter}
          checked={CourseCheckedDurationFilters}
        />
        <Filter
          title="AVG FEE PER YEAR"
          filterList={filterBy?.avgFeePerYear}
          handleFilter={handleAvgFeePerYearFilter}
          checked={AvgFeePerYearCheckedFilters}
        />
        <Filter
          title="STATE"
          filterList={filterBy?.state}
          handleFilter={handleStateFilter}
          checked={StateCheckedFilters}
        />
        <Filter
          title="CITY"
          filterList={filterBy?.city}
          handleFilter={handleCityFilter}
          checked={CityCheckedFilters}
        />
        <Filter
          title="COURSE"
          filterList={filterBy?.course}
          handleFilter={handleCourseFilter}
          checked={CoursesCheckedFilters}
        />
        <Filter
          title="PROGRAM TYPE"
          filterList={filterBy?.programType}
          handleFilter={handleProgramTypeFilter}
          checked={ProgramTypeCheckedFilters}
        />
        <Filter
          title="COLLEGE TYPE"
          filterList={filterBy?.collegeType}
          handleFilter={handleCollegeTypeFilter}
          checked={CollegeTypeCheckedFilters}
        />
        <Filter
          title="COLLEGE CATEGORY"
          filterList={filterBy?.collegeCategory}
          handleFilter={handleCollegeCategoryFilter}
          checked={CollegeCategoryCheckedFilters}
        />
        <Filter
          title="AFFILIATION"
          filterList={filterBy?.affiliation}
          handleFilter={handleAffiliationFilter}
          checked={AffiliationCheckedFilters}
        />
        <Filter
          title="GENDER ACCEPTED"
          filterList={filterBy?.gender}
          handleFilter={handleGenderFilter}
          checked={GenderCheckedFilters}
        />
        <Filter
          title="RANKING"
          filterList={filterBy?.ranking}
          handleFilter={handleRankingFilter}
          checked={RankingCheckedFilters}
        />
        <Filter
          title="EXAM ACCEPTED"
          filterList={filterBy?.exam}
          handleFilter={handleExamFilter}
          checked={ExamCheckedFilters}
        />
      </div>
    </aside>
  );
}

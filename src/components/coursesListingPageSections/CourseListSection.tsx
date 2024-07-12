"use client";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineSort } from "react-icons/md";
import Wrapper from "@/components/Wrappers";
import SortButton from "@/components/SortButton";
import { Button } from "../Button";
import CourseFilters from "./CourseFilters";
import CourseFilteredCard from "../cardsAndSliders/CourseFilteredCard";

import { getAllCourses } from "@/graphql/courseQuery/course";
import { useQuery } from "@apollo/client";
export default function CourseListSection({
  data,
  filterBy,
  tabsSections,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>();
  const [SelectedFilters, setSelectedFilters] = useState({
    mode: [] as string[],
    courseDuration: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  // for Query
  const [ModeCheckedFilters, setModeCheckedFilters] = useState<string[]>([]);
  const [CourseCheckedDurationFilters, setCourseCheckedDurationFilters] =
    useState<number>(0);
  // const mode = "Regular";
  // const duration = 4;
  const {
    data: courseData,
    refetch,
    loading,
    error,
  } = useQuery(getAllCourses, {
    variables: {
      // mode: ModeCheckedFilters,
      // duration: CourseCheckedDurationFilters,
      // searchByCourseName: searchValue,
    },
  });

  useEffect(() => {
    if (courseData) {
      console.log("courseData:", courseData?.courses?.data);
      setFilteredData(courseData?.courses?.data);
    }
  }, [courseData]);

  // useEffect(() => {
  //   refetch({ mode, duration, searchValue });
  // }, [mode, duration, refetch, searchValue]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    // const filtered = courseData?.courses?.data?.filter((course: any) =>
    //   course?.attributes?.courseName?.toLowerCase().includes(searchTerm),
    // );
    setSearchValue(searchTerm);
  }

  console.log("filteredData:", filteredData);
  // useEffect(() => {
  //   console.log("courseData:", courseData?.courses?.data[0]);
  //   if (searchValue?.trim() === "") {
  //     setFilteredData(courseData?.courses?.data);
  //   }
  //   else {
  //     const filtered = courseData?.courses?.data.filter((filter: any) =>
  //       filter.attributes.name
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase()),
  //     );
  //     setFilteredData(filtered);
  //   }
  // }, [courseData]);

  // useEffect(() => {
  //   refetch({ mode, duration });
  // }, [mode, duration, refetch]);

  const handleMobileFilter = () => {
    setMobileFilter((pre) => !pre);
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...data].sort((a: any, b: any) => {
        return a?.name?.localeCompare(b?.name);
      });
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...data]?.slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  // Navbar
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col justify-between gap-5 md:flex-row">
        {/* Aside College Filter Section  */}
        <CourseFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
          // For query
          ModeCheckedFilters={ModeCheckedFilters}
          setModeCheckedFilters={setModeCheckedFilters}
          CourseCheckedDurationFilters={CourseCheckedDurationFilters}
          setCourseCheckedDurationFilters={setCourseCheckedDurationFilters}
        />
        {/* main Course Search and List Section  */}
        <main className="flex w-full flex-col py-5 pt-0 md:min-w-[550px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-xl border border-zinc-200 bg-white px-2 shadow-md">
              <RiSearchLine className="text-orange-500" />
              <input
                className="w-full pl-5 focus:outline-none max-md:p-3"
                type="text"
                placeholder="Search Course Name"
                onChange={handleSearch}
              />
            </div>
            <div className="bottom-0 left-0 right-0 flex justify-end gap-4 border-orange-300 bg-white max-md:fixed max-md:z-40 max-md:w-full max-md:justify-between max-md:border-t max-md:p-3">
              {/* Sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div
                className="hidden max-md:block max-md:w-full max-md:flex-[1]"
                onClick={() => setMobileFilter((prev) => !prev)}
              >
                <Button
                  variant="orange"
                  className="group flex h-12 cursor-pointer items-center gap-2 !rounded-xl !px-2 max-md:!w-full"
                >
                  <span>Filter</span>
                  <MdOutlineSort />
                </Button>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          {filteredData?.map((course: any) => (
            <CourseFilteredCard
              key={course?.id}
              slug={course?.attributes?.slug}
              bgImage={course?.attributes?.bgImage?.data?.attributes?.url}
              courseName={course?.attributes?.courseName}
              courseType={
                course?.attributes?.courseType?.data?.attributes?.collegeType
              }
              totalColleges={course?.totalColleges}
              duration={
                course?.attributes?.duration?.data?.attributes?.duration
              }
              description={course?.attributes?.description}
              avgFeesFrom={course?.attributes?.avgFees?.from}
              avgFeesTo={course?.attributes?.avgFees?.to}
              // courseLevel={course?.attributes?.courseLevel}
              tabsSections={course?.attributes?.navbars?.data}
            />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

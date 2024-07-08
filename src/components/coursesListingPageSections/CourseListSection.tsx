"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineSort } from "react-icons/md";
import Wrapper from "@/components/Wrappers";
import SortButton from "@/components/SortButton";
import { Button } from "../Button";
import CourseFilters from "./CourseFilters";
import CourseFilteredCard from "../cardsAndSliders/CourseFilteredCard";
export default function CourseListSection({
  data,
  filterBy,
  tabsSections,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [SelectedFilters, setSelectedFilters] = useState({
    mode: [] as string[],
    courseDuration: 0,
  });

  function handleSearch() {
    // search operation
  }

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
      <Wrapper className="flex gap-5 justify-between flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <CourseFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
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
            <div className="flex gap-4">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div
                className="hidden max-md:block"
                onClick={() => setMobileFilter((prev) => !prev)}
              >
                <Button
                  variant="orange"
                  className="group flex h-12 cursor-pointer items-center gap-2 !rounded-xl !px-2"
                >
                  <span>Filter</span>
                  <MdOutlineSort />
                </Button>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          { filteredData?.map((course: any) => (
            <CourseFilteredCard 
            key={course?.id} 
            slug={course?.slug}
            bgImage={course?.bgImage?.url}
            courseName={course?.courseName}
            courseType={course?.courseType}
            totalColleges={course?.totalColleges}
            duration= {course?.duration}
            description={course?.description}
            avgFeesFrom={course?.avgFees?.from}
            avgFeesTo={course?.avgFees?.to}
            ExaminationLevel={course?.ExaminationLevel}
            tabsSections={tabsSections}            
            />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

"use client";
import React, { useState } from "react";

import Wrapper from "@/components/Wrappers";
import { examsListingPage, exams } from "@/data/examData";
import Image from "next/image";
// import { collegePage, colleges, tabsSections } from "@/data/collegeData";
// import { addCommas } from "@/utils/customText";
import { RiSearchLine, RiTodoLine } from "react-icons/ri";
import SortButton from "@/components/SortButton";
import { Button } from "@/components/Button";
import { MdOutlineSort } from "react-icons/md";

import Link from "next/link";

import { FaBook } from "react-icons/fa";
import CollegeFilters from "@/components/collegesListingPageSections/CollegeFilters";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1 } from "@/data/globalData";
import ExamListingBanner from "@/components/bannerSections/ExamListingBanner";
import ExamListSection from "@/components/examsListingPageSections/ExamListSection";

export default function Exams() {
  return (
    <>
      <ExamListingBanner data={examsListingPage?.banner} />
      <ExamListSection
        // data={colleges}filterBy,
  
        // tabsSections={tabsSections}
        examDataArray ={exams}
        filterBy={examsListingPage?.filterBy}
      />
      <Banner1 data={banner1} />
    </>
  );
}



function ExamsListSection({
  data,
  filterBy,
  tabsSections,
  topColleges,
  courses,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  // const [filteredData, setFilteredData] = useState<any>(data);
  // const [SelectedFilters, setSelectedFilters] = useState({
  //   stream: [] as string[],
  //   courseDuration: 0,
  //   state: [] as string[],
  //   city: [] as string[],
  //   courses: [] as string[],
  //   programType: [] as string[],
  //   collegeType: [] as string[],
  //   avgFeePerYear: "",
  //   collegeCategory: [] as string[],
  //   affiliation: [] as string[],
  //   genderAccepted: "",
  //   ranking: "",
  //   examAccepted: [] as string[],
  // });

  function handleSearch() {
    // search operation
  }

  const handleFilterOptionClick = () => {
    // if (option === "a-z") {
    //   const sortedData: any = [...data].sort((a: any, b: any) => {
    //     return a?.name.localeCompare(b?.name);
    //   });
    //   setFilteredData(sortedData.slice(0, displayCount));
    // } else if (option === "reset") {
    //   const resetArray: any = [...data].slice(0, displayCount);
    //   setFilteredData(resetArray);
    // }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        {/* <CollegeFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
        /> */}
        {/* main College Search and List Section  */}
        <main className="flex w-full flex-col p-5 pt-0 md:min-w-[550px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-sm:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-xl border border-zinc-200 bg-white px-2 shadow-md">
              <RiSearchLine className="text-orange-500" />
              <input
                className="w-full pl-5 focus:outline-none max-md:p-3"
                type="text"
                placeholder="Search Colleges Name..."
                onChange={handleSearch}
              />
            </div>
            <div className="flex justify-end gap-4 max-md:w-full">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div
                className="hidden max-md:block"
                // onClick={() => setMobileFilter((prev) => !prev)}
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
          {/* College List Section */}
          {/* {courses.map((course: any) => (
            <ExamFilteredCard
              key={course?.id}
              slug={course?.slug}
              bg={course?.bg}
              brochureUrl={course?.brochureUrl}
              regDate={course?.applicationSubmissionDates?.startDate}
              examDate={course?.applicationSubmissionDates?.endDate}
              category={course?.category}
              examName={course?.examName}
              mode={course?.mode}
              level={course?.ExaminationLevel}
              description={course?.description}
            />
          ))} */}
          {/* Top Colleges Section  */}
          {/* <TopCollegesScroll data={topColleges} /> */}
          {/* Next College List Section  */}
          {/* {filteredData.slice(3).map((college: any) => (
            <CollegeFilteredCard key={college.id} college={college} />
          ))} */}
        </main>
      </Wrapper>
    </section>
  );
}

function ExamFilteredCard({
  slug,
  bg,

  brochureUrl,
  regDate,
  examDate,
  category,
  examName,
  mode,
  level,
  description,
}: any) {
  return (
    <div className="relative mb-5 w-full rounded-lg shadow-lg bg-white">
      {/* Div 1 */}
      <div className="flex gap-y-2 p-5 max-lg:flex-wrap">
        <Image
          src={bg}
          alt="collage"
          // width={100}
          // height={100}
          className="h-[175px] w-[220px] rounded-md max-lg:w-full"
        />
        <div className="md:px-5">
          {/* Line 1  */}
          <Link href={`/colleges/${slug || "#"}`}>
            <h1 className="mb-3 text-wrap text-xl font-bold hover:text-orange-500 cursor-pointer">
              {examName}
            </h1>
          </Link>
          {/* Line 2 */}
          <div className="mb-3 flex flex-wrap gap-x-6">
            {/* item 1 */}

            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-3xl text-orange-500" />
                <div>
                  <p className="font-semibold">
                    Registration Date:{" "}
                    <span className="text-zinc-600">{regDate}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* item 2  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-3xl text-orange-500" />
                <div>
                  <p className="font-semibold">
                    Exam Date: <span className="text-zinc-600">{examDate}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* line2.5 */}
          <div className="mb-3 flex flex-wrap gap-x-6">
            {/* item 1 */}

            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold text-blue-500">{mode}</p>
                </div>
              </div>
            </div>
            {/* item 2  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <FaBook className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold text-blue-500">{level}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Line 3  */}
          <div className="flex gap-x-1 text-zinc-600">
            <p className="line-clamp-2 text-wrap text-sm [flex:11]">
              <span className="line-clamp-2 text-justify">{description}</span>
              <span className="text-orange-500 hover:underline ">
                <Link href={`/exams/${slug} || '#'}`}>Read More</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* div 3  */}
      <div className="flex flex-wrap justify-between gap-y-2 border-t border-zinc-600 p-5">
        {/* Navbar Items  */}
        <ul className="flex flex-wrap items-center gap-x-4 rounded-md bg-orange-100 px-4 py-1 text-sm text-orange-600">
          {category?.slice(0, 5)?.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <Link href="#">
                <li
                  key={index}
                  className="cursor-pointer capitalize hover:underline"
                >
                  {item}
                </li>
              </Link>
              {index !== category?.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
          {category?.length > 5 && (
            <Link href={`/exams/${slug} || "#"}`}>
              <li className="cursor-pointer capitalize hover:underline">
                more
              </li>
            </Link>
          )}
        </ul>
        {/* buttons  */}
        <div className="flex gap-2 max-md:w-full max-md:flex-col">
          <Link href="#" className="max-md:w-full">
            <Button variant="black" className="!w-full">
              Apply Now
            </Button>
          </Link>
          <Link href={brochureUrl} className="max-md:w-full">
            <Button variant="orange" className="!w-full">
              Download Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

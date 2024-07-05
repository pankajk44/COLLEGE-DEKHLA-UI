"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/SortButton";
import { MdOutlineSort } from "react-icons/md";
import Wrapper from "@/components/Wrappers";
import { Button } from "@/components/Button";
import CollegeFilteredCard from "@/components/cardsAndSliders/CollegeFilteredCard";
import TopCollegesScroll from "@/components/cardsAndSliders/TopCollegesScroll";
import CollegeFilters from "./CollegeFilters";
export default function CollegeListSection({
  data,
  filterBy,
  tabsSections,
  topColleges,
}: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [SelectedFilters, setSelectedFilters] = useState({
    stream: [] as string[],
    courseDuration: 0,
    state: [] as string[],
    city: [] as string[],
    courses: [] as string[],
    programType: [] as string[],
    collegeType: [] as string[],
    avgFeePerYear: "",
    collegeCategory: [] as string[],
    affiliation: [] as string[],
    genderAccepted: "",
    ranking: "",
    examAccepted: [] as string[],
  });

  function handleSearch() {
    // search operation
  }

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...data].sort((a: any, b: any) => {
        return a?.name.localeCompare(b?.name);
      });
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...data].slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className="flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <CollegeFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
        />
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
          {filteredData.slice(0, 3).map((college: any) => (
            <CollegeFilteredCard
              key={college.id}
              slug={college?.slug}
              bgImage={college?.bgImage?.url}
              city={college?.location?.city}
              state={college?.location?.state}
              overallRating={college?.reviewsAndRatings?.overallRating}
              totalReviews={college?.reviewsAndRatings?.totalReviews}
              avgFeePerYear={college?.avgFeePerYear}
              affiliation={college?.affiliation}
              hightestPackage={college?.hightestPackage}
              brochureUrl={college?.brochureUrl}
              collegeType={college?.collegeType}
              collegeName={college?.collegeName}
              avgPackage={college?.avgPackage}
              exam={college?.exam}
              description={college?.description}
              tabsSections={tabsSections}
            />
          ))}
          {/* Top Colleges Section  */}
          <TopCollegesScroll data={topColleges} />
          {/* Next College List Section  */}
          {filteredData.slice(3).map((college: any) => (
            <CollegeFilteredCard key={college.id} college={college} />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineSort } from "react-icons/md";

// import ExamFilters from "./ExamFilters";
import Navbar from "./Navbar";
import Wrapper, { Wrapper1 } from "@/components/Wrappers";
import SortButton from "@/components/SortButton";
import ExamFilteredCard from "@/components/cardsAndSliders/ExamFilteredCard";
import { Button } from "../Button";
import ExamFilters from "./ExamFilters";
export default function ExamListSection({ data, filterBy, tabsSections }: any) {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [SelectedFilters, setSelectedFilters] = useState({
    stream: [] as string[],
    mode: [] as string[],
    eligibilityLevel: [] as string[],
    examinationLevel: [] as string[],
    examStatus: [] as string[],
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
      <Wrapper className="flex flex-col justify-between gap-6 md:flex-row">
        {/* Aside College Filter Section  */}
        <ExamFilters
          filterBy={filterBy}
          SelectedFilters={SelectedFilters}
          setSelectedFilters={setSelectedFilters}
          totalResults={data?.length}
          mobileFilter={MobileFilter}
          setMobileFilter={setMobileFilter}
        />
        {/* main Exam Search and List Section  */}
        <main className="flex w-full flex-col py-5 pt-0 md:min-w-[550px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-xl border border-zinc-200 bg-white px-2 shadow-md">
              <RiSearchLine className="text-orange-500" />
              <input
                className="w-full pl-5 focus:outline-none max-md:p-3"
                type="text"
                placeholder="Search Exam Name"
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
          {/* Navbar Filter  */}
          <Navbar
            category={filterBy?.category}
            selectedNav={selectedIndex}
            onSelect={handleSelect}
          />
          {/* College List Section  */}
          {filteredData.map((exam: any) => (
            <ExamFilteredCard
              key={exam.id}
              exam={exam}
              tabsSections={tabsSections}
            />
          ))}
        </main>
      </Wrapper>
    </section>
  );
}

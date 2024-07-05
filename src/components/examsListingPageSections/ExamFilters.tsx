"use client";
import Filter from "@/components/filters/Filter";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function ExamFilters({
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
  const [ModeCheckedFilters, setModeCheckedFilters] = useState<string[]>([]);
  const [LevelCheckedFilters, setLevelCheckedFilters] = useState<string[]>([]);

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

  const handleModeFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = ModeCheckedFilters.includes(data)
      ? ModeCheckedFilters.filter((item) => item !== data)
      : [...ModeCheckedFilters, data];

    setModeCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      mode: updatedSelection,
    }));
  };

  const handleLevelFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = LevelCheckedFilters.includes(data)
      ? LevelCheckedFilters.filter((item) => item !== data)
      : [...LevelCheckedFilters, data];

    setLevelCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      level: updatedSelection,
    }));
  };

  // function to remove filters from all selected filters
  const handleUnselectFilter = (filter?: string) => {
    if (filter === "stream") {
      setStreamCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        stream: [],
      }));
    } else if (filter === "mode") {
      setModeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        mode: [],
      }));
    } else if (filter === "category") {
      setLevelCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        category: [],
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
      <h1 className="mb-10 font-medium">
        Showing {totalResults} Results
      </h1>
      <div className="w-full rounded border-2 border-zinc-300 bg-white p-5 pb-0 max-md:bg-opacity-95">
        <h2 className="mb-5 font-medium">Find Exam</h2>
        {/* Selected filters display */}
        <div className="flex flex-wrap items-center gap-1">
          {Object.values(SelectedFilters).some(
            (value) =>
              value !== "" && (!Array.isArray(value) || value.length !== 0),
          ) && <span className="text-xs font-bold">Filters Applied : </span>}
          {Object.entries(SelectedFilters).map(([key, value]: any) => {
            if (Array.isArray(value)) {
              // If the value is an array, join its elements with commas
              value = value.join(" , ");
            }
            return (
              value !== "" &&
              (!Array.isArray(value) || value.length !== 0) && (
                <div
                  key={key}
                  className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                >
                  <span className="max-w-[150px] text-wrap">{value}</span>
                  <button onClick={() => handleUnselectFilter(key)}>
                    <MdClose />
                  </button>
                </div>
              )
            );
          })}
        </div>
        {/* END shows filter by options */}

        {/* Filters  */}
        <Filter
          title="STREAM"
          filterList={filterBy?.stream}
          handleFilter={handleStreamFilter}
          checked={StreamCheckedFilters}
        />
        <Filter
          title="MODE"
          filterList={filterBy?.mode}
          handleFilter={handleModeFilter}
          checked={ModeCheckedFilters}
        />
        <Filter
          title="CATEGORY"
          filterList={filterBy?.category}
          handleFilter={handleLevelFilter}
          checked={LevelCheckedFilters}
        />
      </div>
    </aside>
  );
}

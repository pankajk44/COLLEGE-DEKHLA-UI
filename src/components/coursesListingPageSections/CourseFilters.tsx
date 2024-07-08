import Filter from "@/components/filters/Filter";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function CourseFilters({
  filterBy,
  SelectedFilters,
  setSelectedFilters,
  totalResults,
  mobileFilter,
  setMobileFilter,
}: any) {
  const [ModeCheckedFilters, setModeCheckedFilters] = useState<string[]>([]);
  const [CourseCheckedDurationFilters, setCourseCheckedDurationFilters] =
    useState<number>(0);

  const handleModeFilter = (data: string) => {
    const updatedSelection = ModeCheckedFilters.includes(data)
      ? ModeCheckedFilters.filter((item) => item !== data)
      : [...ModeCheckedFilters, data];

    setModeCheckedFilters(updatedSelection);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      mode: updatedSelection,
    }));
  };

  const handleCourseDurationFilter = (data: number) => {
    setCourseCheckedDurationFilters(data);
    setSelectedFilters((prevData: any) => ({
      ...prevData,
      courseDuration: data,
    }));
  };

  const handleUnselectFilter = (filter: string) => {
    if (filter === "mode") {
      setModeCheckedFilters([]);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        mode: [],
      }));
    } else if (filter === "courseDuration") {
      setCourseCheckedDurationFilters(0);
      setSelectedFilters((prevData: any) => ({
        ...prevData,
        courseDuration: 0,
      }));
    }
  };

  return (
    <aside
      className={`min-w-[300px]  flex-2 max-md:bg-black max-md:bg-opacity-80 ${
        mobileFilter ? "fixed left-0 top-0 z-40 h-screen w-full overflow-y-scroll pr-[20%]" : "max-md:hidden"
      }`}
    >
      <button
        className="fixed right-5 top-24 text-3xl text-white md:hidden"
        onClick={() => setMobileFilter(false)}
      >
        <IoIosCloseCircleOutline />
      </button>
      <h1 className="mb-10 font-medium">Showing {totalResults} Results</h1>
      <div className="w-full pb-0 max-md:bg-opacity-95">
        <h2 className="mb-5 font-medium">Find Exam</h2>
        <div className="flex flex-wrap items-center gap-1 mb-3 max-md:text-white">
          {Object.values(SelectedFilters).some(
            (value) =>
              value !== "" &&
              value !== 0 &&
              (!Array.isArray(value) || value.length !== 0)
          ) && <span className="text-xs font-bold">Filters Applied : </span>}
          {Object.entries(SelectedFilters).map(([key, value]: any) => {
            if (Array.isArray(value)) {
              value = value.join(" , ");
            } else if (key === "courseDuration") {
              const duration: any =
                typeof value === "string" ? parseInt(value) : value;
              return (
                value !== "" &&
                value !== 0 && (
                  <div
                    key={key}
                    className="flex w-max items-center gap-1 rounded-md border border-orange-500 px-2 py-1 text-xs"
                  >
                    <span>
                      {Math.floor(duration / 12)} years {duration % 12} months
                    </span>
                    <button onClick={() => handleUnselectFilter(key)}>
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
                  className="flex w-max items-center gap-1 rounded-md border border-orange-500 px-2 py-1 text-xs"
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
        <Filter
          title="MODE"
          filterList={filterBy?.courseMode}
          handleFilter={handleModeFilter}
          checked={ModeCheckedFilters}
        />
        <Filter
          title="COURSE DURATION"
          filterList={filterBy?.courseDuration}
          handleFilter={handleCourseDurationFilter}
          checked={CourseCheckedDurationFilters}
        />
      </div>
    </aside>
  );
}

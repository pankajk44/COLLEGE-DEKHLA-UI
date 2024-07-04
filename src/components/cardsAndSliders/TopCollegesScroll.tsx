import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { CollegesCardContent } from "./CollegesSlider";

export default function TopCollegesScroll({ data }: any) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative my-16 max-w-[1035px] rounded-lg bg-blue-200 pb-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {data?.title && (
        <h1 className="title1 p-6">
          {data?.title?.t1 && (
            <>
              <span className="text-blue-950">{data?.title?.t1}</span>{" "}
            </>
          )}
          {data?.title?.t2 && (
            <>
              <span className="text-blue-950">{data?.title?.t2}</span>{" "}
            </>
          )}
          {data?.title?.t3 && (
            <>
              <span className="text-blue-500">{data?.title?.t3} </span>{" "}
            </>
          )}
        </h1>
      )}
      <div
        className="flex w-full gap-6 overflow-x-hidden md:px-5"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {data.colleges.map((college: any, index: number) => (
          <div
            key={index}
            className="min-w-96 max-md:min-w-[17.2rem] overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-xl"
          >
            <CollegesCardContent college={college} />
          </div>
        ))}
      </div>
      {showLeftButton && (
        <button
          className="absolute right-24 top-3 rounded-full bg-blue-500 p-3 max-md:opacity-60 max-md:hover:opacity-60"
          onClick={handleScrollLeft}
        >
          <TiChevronLeft className="text-3xl text-white" />
        </button>
      )}
      {showRightButton && (
        <button
          className="absolute right-5 top-3 rounded-full bg-blue-500 p-3"
          onClick={handleScrollRight}
        >
          <TiChevronRight className="text-3xl text-white" />
        </button>
      )}
    </div>
  );
}

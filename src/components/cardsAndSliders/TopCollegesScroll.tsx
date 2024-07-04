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
        left: scrollContainerRef.current.scrollLeft - 250,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 250,
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
    <div className="relative my-16 max-w-max rounded-2xl bg-orange-500 py-10 pl-1 sm:pl-5 shadow-lg">
      <h1 className="max-sm:pl-5  pb-6 text-3xl font-bold text-white">
        Discover Top colleges in<br /> <span className="text-black">Engineering</span>{" "}
        category
      </h1>
      
      <div
        className="flex w-full gap-6 overflow-x-hidden md:pr-5"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {data?.map((college: any, index: number) => {
            const slide = (
              <div
              key={index}
              className="min-w-96 overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-md max-md:min-w-[325px] p-1"
            >
              <CollegesCardContent
                slug={college?.slug}
                bgImage={college?.bgImage?.url}
                collegeLogo={college?.collegeLogo}
                breadCrumb={college?.breadCrumb}
                city={college?.city}
                state={college?.state}
                overallRating={college?.reviewsAndRatings?.overallRating}
                totalReviews={college?.reviewsAndRatings?.totalReviews}
                avgFeePerYear={college?.avgFeePerYear}
                affiliation={college?.affiliation}
                hightestPackage={college?.hightestPackage}
                brochureUrl={college?.brochureUrl}
              />
            </div>
            )
            return(
              <>
              {slide}{slide}{slide}{slide}{slide}{slide}{slide}{slide}
              </>
            )
        })}
      </div>
      {showLeftButton && (
        <button
          className="absolute right-24 top-6 rounded-full bg-white p-3 max-md:opacity-60 max-md:hover:opacity-60"
          onClick={handleScrollLeft}
        >
          <TiChevronLeft className="text-3xl text-black" />
        </button>
      )}
      {showRightButton && (
        <button
          className="absolute right-5 top-6 rounded-full bg-white p-3"
          onClick={handleScrollRight}
        >
          <TiChevronRight className="text-3xl text-black" />
        </button>
      )}
    </div>
  );
}

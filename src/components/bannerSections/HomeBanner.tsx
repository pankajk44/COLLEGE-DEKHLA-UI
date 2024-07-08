"use client";
import React from "react";
import Wrapper from "@/components/Wrappers";
import { Button } from "@/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { courses } from "@/data/courseData";
import { CollegesCardContent } from "../cardsAndSliders/CollegesSlider";

export function HomeBanner({ title, fullData }: any) {
  return (
    <Wrapper>
      <div className="absolute left-0 top-0 h-full min-h-[140vh] w-full bg-[radial-gradient(circle_at_center_40px,transparent,transparent,transparent,transparent,#AADBFF,#00BBFF,#873D7C,#FFA93C,#FF8900,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent)] bg-[size:400%] bg-[position:50%] bg-no-repeat opacity-60 max-sm:bg-[size:1000%]"></div>

      <div className="flex-center relative z-20 h-full w-full flex-col p-24 max-sm:p-4">
        <div className="max-w-[740px] text-center">
          <h1 className="mb-4 text-center text-5xl font-bold max-sm:mb-2 max-sm:text-3xl">
            {title.t1} <span className="text-orange-600">{title?.t2}</span>
          </h1>
          <p className="text-center text-xl">{title?.text}</p>
          {/* for input type */}
          {/* <Search /> */}

          <Wrapper
            as="div"
            bgColor="bg-transparent"
            containerClassName="px-10 py-10"
            className="!md:pr-2 text-primary-text focus-within:border-secondary-text flex h-12 items-center gap-4 rounded-xl bg-white py-2 !pr-2 shadow-md max-md:mt-5"
          >
            <input
              className="w-full pl-5 focus:outline-none max-md:p-3"
              type="text"
              placeholder="Search for colleges, courses etc."
              min={3}
            />
            <Button variant="black" className="text-sm">
              Submit
            </Button>
          </Wrapper>
        </div>
        {/* cards */}
        <div className="mt-8 flex w-full flex-wrap justify-center gap-2 max-sm:mt-3">
          <Section1Card data={fullData.text1} />
          <Section1Card data={fullData.text2} />
          <Section1Card data={fullData.text3} />
          <Section1Card data={fullData.text4} />
        </div>
        <div className="my-10 max-w-[1000px] rounded-xl bg-black bg-opacity-70 px-6 py-10 text-center text-white max-sm:my-5">
          {fullData.text5}
        </div>
        {/* slider part */}
        <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          Popular Courses
        </h2>
        <HomeSection1Slider data={courses?.[0]} />
      </div>
    </Wrapper>
  );
}

interface Section1CardProps {
  data: string;
}

function Section1Card({ data }: Section1CardProps) {
  return (
    <div className="w-full rounded-xl bg-white bg-opacity-30 p-2 sm:w-[48%] lg:w-[23%]">
      <div className="h-full rounded-xl bg-white px-3 py-8 text-center">
        <p className="text-center text-orange-500">{data}</p>
      </div>
    </div>
  );
}

const HomeSection1Slider = ({ data }: any) => {
  const uniqueId = "popularCourses123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper !relative w-full max-w-fit px-5 ${uniqueId} topColleges`}
      >
        {["", "text-blue-800", "", "text-blue-800", "", "text-blue-800"].map(
          (className, idx) => (
            <SwiperSlide
              key={idx}
              className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
            >
              <CollegesCardContent
                text={data.breadCrumb}
                className={className}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div
        className={`${uniqueId}-next !absolute !bottom-48 !right-0 !rounded-full bg-white p-2 !text-2xl !text-black shadow-md max-sm:hidden`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${uniqueId}-prev !absolute !bottom-48 !left-0 !rounded-full bg-white p-2 !text-2xl !text-black shadow-md max-sm:hidden`}
      >
        <FaAngleLeft />
      </div>
    </>
  );
};

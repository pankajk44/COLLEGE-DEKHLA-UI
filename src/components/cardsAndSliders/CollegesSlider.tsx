"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { addCommas } from "@/utils/customText";

export default function CollegesSlider({ data }: any) {
  const uniqueId = "college123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 ${uniqueId}`}
      >
        {data?.map((college: any, index: number) => (
          <>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
            <SwiperSlide key={index} className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg" > {" "} <CollegesCardContent college={college} />{" "} </SwiperSlide>
          </>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

export const CollegesCardContent = function CollegesCard({ college }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        {college?.bgImage && (
          <Image
            src={college?.bgImage?.url}
            alt={college?.breadCrumb}
            width={800}
            height={800}
            className="h-[200px] w-full rounded-xl object-cover"
          />
        )}
        <div className="absolute left-2 top-2 rounded-full bg-white p-1">
          {college?.collegeLogo && (
            <Image
              src={college?.collegeLogo?.url}
              alt={college?.breadCrumb}
              width={800}
              height={800}
              className="h-10 w-10 object-contain"
            />
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-4">
          {/* College Name & Location  */}
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold">{college?.breadCrumb}</h4>
            <p className="capitalize">{college?.location?.state}</p>
          </div>
          {/* Rating & Reviews  */}
          <p className="flex items-center gap-2">
            <FaStar className="text-orange-400" />
            <span>{college?.reviews?.overallRating}/5</span>
            <span>({college?.reviews?.totalReviews} reviews)</span>
          </p>
          {/* Fees  */}
          <p className="text-2xl font-bold text-orange-500">
            <span>INR {`${addCommas(college?.avgFeePerYear)}`}</span>{" "}
            <span className="text-sm text-black">(Avg. year fees)</span>{" "}
          </p>
          {/* Affiliations  */}
          <p>
            {college?.affiliation?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                {item}
                {index < college.affiliation.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </p>
          {/* Package  */}
          <p className="text-xl font-bold text-orange-500">
            <span>INR {`${addCommas(college?.hightestPackage)}`}</span>{" "}
            <span className="text-sm text-black">Highest Package</span>
          </p>
        </div>
        {/* Buttons  */}
        <div className="mt-5 border-t pt-5 border-orange-500 flex justify-between gap-2 max-md:flex-col">
          <Link href={`/colleges/${college?.slug}`} className="w-full">
            <Button variant="black" className="!w-full text-nowrap !px-2">
              See More
            </Button>
          </Link>
          <Link href={`/colleges/${college?.slug}`} className="w-full">
            <Button variant="orange" className="!w-full text-nowrap !px-2">
              Download Brochure
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

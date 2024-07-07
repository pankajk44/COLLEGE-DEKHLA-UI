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

export default function CollegesSlider({ data , mainscreen, spaceBetween}: any) {
  const uniqueId = "college123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: spaceBetween || 10,
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
        slidesPerView: mainscreen || 4,
      },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 ${uniqueId}`}
      >
        {data?.map((college: any, index: number) => {
          const slide = (
            <SwiperSlide
              key={index}
              className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
            >
              {" "}
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
              />{" "}
            </SwiperSlide>
          );
          return (
            <>
              {slide}
              {slide}
              {slide}
              {slide}
              {slide}
            </>
          );
        })}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

export const CollegesCardContent = function CollegesCard({
  slug,
  bgImage,
  collegeLogo,
  breadCrumb,
  city,
  state,
  overallRating,
  totalReviews,
  avgFeePerYear,
  affiliation,
  hightestPackage,
  brochureUrl,
}: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        {bgImage && (
          <Image
            src={bgImage}
            alt={breadCrumb}
            width={800}
            height={800}
            className="h-[200px] w-full rounded-t-2xl object-cover"
          />
        )}
        <div className="absolute left-2 top-2 rounded-full bg-white p-1">
          {collegeLogo && (
            <Image
              src={collegeLogo?.url}
              alt={breadCrumb}
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
            <Link href={`/colleges/${slug} || #`}>
              <h4 className="text-2xl font-bold hover:text-orange-500">
                {breadCrumb}
              </h4>
            </Link>
            <p className="capitalize">{state}</p>
          </div>
          {/* Rating & Reviews  */}
          <p className="flex items-center gap-2">
            <FaStar className="text-orange-400" />
            <span>{overallRating}/5</span>
            <span>({totalReviews} reviews)</span>
          </p>
          {/* Fees  */}
          <p className="text-2xl font-bold text-orange-500">
            <span>INR {`${addCommas(avgFeePerYear)}`}</span>{" "}
            <span className="text-sm text-black">(Avg. year fees)</span>{" "}
          </p>
          {/* Affiliations  */}
          <p>
            {affiliation?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                {item}
                {index < affiliation.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </p>
          {/* Package  */}
          <p className="text-xl font-bold text-orange-500">
            <span>INR {`${addCommas(hightestPackage)}`}</span>{" "}
            <span className="text-sm text-black">Highest Package</span>
          </p>
        </div>
        {/* Buttons  */}
        <div className="mt-5 flex justify-between gap-2 border-t border-orange-500 pt-5 max-md:flex-col">
          <Link href={`/colleges/${slug} || #`} className="w-full">
            <Button variant="black" className="!w-full text-nowrap !px-2">
              See More
            </Button>
          </Link>
          <Link href={brochureUrl || "#"} className="w-full">
            <Button variant="orange" className="!w-full text-nowrap !px-2">
              Download Brochure
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

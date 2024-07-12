"use client";
import React, { useEffect } from "react";
import CourseListingBanner from "@/components/bannerSections/CourseListingBanner";
import CourseListSection from "@/components/coursesListingPageSections/CourseListSection";
import { coursePage, courses } from "@/data/courseData";
import { tabsSections } from "@/data/globalData";

import { getCourseListingPageBanner } from "@/graphql/courseQuery/course";
import { useQuery } from "@apollo/client";

export default function Courses() {
  // Query
  const {
    data: bannerData,
    loading,
    error,
  } = useQuery(getCourseListingPageBanner);

  return (
    <>
      {bannerData && (
        <CourseListingBanner
          title={bannerData?.courseListingPages?.data?.[0]?.attributes?.title}
          bgImg={
            bannerData?.courseListingPages?.data?.[0]?.attributes?.bgImg?.data
              ?.attributes?.url
          }
          imgArray={bannerData?.courseListingPages?.data?.[0]?.attributes?.photos?.data?.map(
            (img: any) => img?.attributes?.url,
          )}
          totalCoursesFound={bannerData?.courses?.meta?.pagination?.total}
        />
      )}
      <CourseListSection
        data={courses}
        filterBy={coursePage?.filterBy}
        tabsSections={tabsSections}
      />
    </>
  );
}

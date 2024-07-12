"use client";
import React, { useEffect } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CourseDetailBanner from "@/components/bannerSections/CourseDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { courses } from "@/data/courseData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";

import { useQuery } from "@apollo/client";
import { getCourseDetails } from "@/graphql/courseQuery/courseDetails";

type Props = {
  params: {
    course: String;
  };
};
export default function CourseDetailPage({ params }: Props) {
  const courseId = params?.course;
  // Query
  const {
    loading,
    error,
    data: courseData,
  } = useQuery(getCourseDetails, {
    variables: { ID: courseId },
  });
  useEffect(() => {
    console.log("Course Details: ", courseData);
  }, [courseData]);

  return (
    <>
      <CourseDetailBanner
        breadCrumb={courses?.[0]?.breadCrumb}
        courseName={courses?.[0]?.courseName}
        titleAddition={courses?.[0]?.titleAddition}
        duration={courses?.[0]?.duration}
        avgFees={courses?.[0]?.avgFees}
        avgFeesFrom={courses?.[0]?.avgFees?.from}
        avgFeesTo={courses?.[0]?.avgFees?.to}
      />

      <PageTabsWithDetail data={tabsSections} asideData={asideSection} />
      <Banner1 data={banner1} />
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CourseDetailBanner from "@/components/bannerSections/CourseDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { courses } from "@/data/courseData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";

import { useQuery } from "@apollo/client";
import { getCourseDetails } from "@/graphql/courseQuery/courseDetails";
import { convertQueryDataToTabSections } from "@/utils/customText";

type Props = {
  params: {
    course: String;
  };
};

export default function CourseDetailPage({ params }: Props) {
  const [tabSelectionArray, setTabSelectionArray] = React.useState<any>([]);
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
    console.log("Course Details: ", courseData?.course?.data?.attributes);

    if (courseData?.course?.data?.attributes?.PageData) {
      const convertedData: any = convertQueryDataToTabSections(
        courseData?.course?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [courseData]);

  // console.log(tabSelectionArray);

  return (
    <>
      <CourseDetailBanner
        breadCrumb={courseData?.course?.data?.attributes?.breadCrumb}
        courseName={courseData?.course?.data?.attributes?.courseName}
        titleAddition={courseData?.course?.data?.attributes?.titleAddition}
        duration={
          courseData?.course?.data?.attributes?.duration?.data?.attributes
            ?.duration
        }
        avgFeesFrom={courseData?.course?.data?.attributes?.avgFees?.from}
        avgFeesTo={courseData?.course?.data?.attributes?.avgFees?.to}
      />

      <PageTabsWithDetail
        data={tabSelectionArray}
        asideData={asideSection}
        slug={courseId}
      />
      <Banner1 data={banner1} />
    </>
  );
}

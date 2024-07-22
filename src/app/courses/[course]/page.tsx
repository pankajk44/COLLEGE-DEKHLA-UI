"use client";
import React, { useEffect, useState } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CourseDetailBanner from "@/components/bannerSections/CourseDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { courses } from "@/data/courseData";
import { banner1, tabsSections } from "@/data/globalData";

import { useQuery } from "@apollo/client";
import { getCourseDetails } from "@/graphql/courseQuery/courseDetails";
import { convertQueryDataToTabSections } from "@/utils/customText";
import { getAllTopCourses } from "@/graphql/courseQuery/topCourses";
import { getAllNews } from "@/graphql/newsQuery/news";

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

  const {
    loading: topCourseLoading,
    error: topCourseError,
    data: topCourseData,
  } = useQuery(getAllTopCourses, {
    variables: {
      page: 1,
      pageSize: 3,
    },
  });

  const {
    data: latestNewsData,
    loading: latestNewsDataLoading,
    error: latestNewsDataError,
  } = useQuery(getAllNews, {
    variables: {
      page: 1,
      pageSize: 3,
    },
  });
  // ========================================================= //
  useEffect(() => {
    // console.log("Course Details: ", courseData?.course?.data?.attributes);
    if (courseData?.course?.data?.attributes?.PageData) {
      const convertedData: any = convertQueryDataToTabSections(
        courseData?.course?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [courseData]);
  // =========================================================== //
  const asideSection = [
    {
      banner: {
        title: "Are You Interested in this course?",
        brochureUrl:
          courseData?.course?.data?.attributes?.brochureFile?.data?.attributes
            ?.url,
      },
      // videoGallery: [],
      // imageGallery: [],
      topCourses: topCourseData?.courses?.data?.map((item: any) => {
        return {
          id: item?.id,
          breadCrumb: item?.attributes?.courseName,
          duration: item?.attributes?.duration?.data?.attributes?.duration,
          fees:
            (item?.attributes?.avgFees?.from + item?.attributes?.avgFees?.to) /
            2,
        };
      }),
      latestNews: latestNewsData?.news?.data?.map((item: any) => {
        return {
          id: item?.id,
          slug: item?.attributes?.slug,
          title: item?.attributes?.title,
          text: item?.attributes?.excerpt,
          timeStamp: item?.attributes?.updatedAt,
          icon: item?.attributes?.icon?.data?.attributes?.url,
          category: item?.attributes?.category?.data?.attributes?.category,
        };
      }),
    },
  ];
  // =========================================================== //
  // console.log(latestNewsData?.news?.data, "courseData");
  // console.log("tabSelectionArray", tabSelectionArray);
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
        tabUrlValue={"courses"}
      />
      <Banner1 data={banner1} />
    </>
  );
}

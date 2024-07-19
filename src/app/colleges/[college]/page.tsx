"use client";
import React, { useEffect, useState } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeDetailBanner from "@/components/bannerSections/CollegeDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { collegePage, colleges } from "@/data/collegeData";
import { banner1, tabsSections } from "@/data/globalData";

import { useQuery } from "@apollo/client";
import { getCollegeDetails } from "@/graphql/collegeQuery/collegeDetails";
import formatFees, { convertQueryDataToTabSections } from "@/utils/customText";
import { getAllTopCourses } from "@/graphql/courseQuery/topCourses";

type Props = {
  params: {
    college: string;
  };
};

export default function CollegeDetailPage({ params }: Props) {
  const [tabSelectionArray, setTabSelectionArray] = useState<any>([]);
  const collegeId = params?.college;

  // Query
  const {
    loading: collegeLoading,
    error: collegeError,
    data: collegeData,
  } = useQuery(getCollegeDetails, {
    variables: { ID: collegeId },
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

  useEffect(() => {
    if (collegeData?.college?.data?.attributes?.PageData) {
      const convertedData = convertQueryDataToTabSections(
        collegeData?.college?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [collegeData]);
  console.log(collegeData?.college?.data?.attributes, "collegeData");
  console.log(tabSelectionArray, "tabSelectionArray");
  // console.log(collegeData?.college?.data?.attributes?.breadCrumb, "breadCrumb");

  const asideSection = [
    {
      banner: {
        title: "Are You Interested in this College?",
        brochureUrl:
          collegeData?.college?.data?.attributes?.brochureFile?.data?.attributes
            ?.url,
      },
      videoGallery:
        collegeData?.college?.data?.attributes?.videoGallery?.flatMap(
          (gallery: any) =>
            gallery?.video?.data?.map(
              (video: any) => video?.attributes?.videoId,
            ),
        ),
      imageGallery:
        collegeData?.college?.data?.attributes?.imageGallery?.flatMap(
          (gallery: any) =>
            gallery?.images?.data?.map((image: any) => image?.attributes?.url),
        ),
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
    },
  ];

  return (
    <>
      <CollegeDetailBanner
        collegeLogo={
          collegeData?.college?.data?.attributes?.data?.attributes?.url
        }
        bgImage={
          collegeData?.college?.data?.attributes?.bgImage?.data?.attributes?.url
        }
        city={
          collegeData?.college?.data?.attributes?.location?.city?.data
            ?.attributes?.city
        }
        state={
          collegeData?.college?.data?.attributes?.location?.state?.data
            ?.attributes?.state
        }
        overallRating={3.5}
        totalReviews={100}
        affiliation={collegeData?.college?.data?.attributes?.affiliation?.data?.map(
          (value: any) => value?.attributes?.organization,
        )}
        brochureUrl={
          collegeData?.college?.data?.attributes?.brochureUrl?.data?.attributes
            ?.url
        }
        collegeName={collegeData?.college?.data?.attributes?.collegeName}
        estYear={collegeData?.college?.data?.attributes?.estYear}
        collegeCategory={
          collegeData?.college?.data?.attributes?.college_type?.data?.attributes
            ?.collegeType
        }
      />
      <PageTabsWithDetail
        data={tabSelectionArray}
        asideData={asideSection}
        slug={collegeId}
        tabUrlValue="colleges"
        breadCrumb={collegeData?.college?.data?.attributes?.breadCrumb}
      />
      <Banner1 data={banner1} />
    </>
  );
}

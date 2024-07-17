"use client";
import React, { useEffect, useState } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeDetailBanner from "@/components/bannerSections/CollegeDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { collegePage, colleges } from "@/data/collegeData";
import { banner1, tabsSections } from "@/data/globalData";

import { useQuery } from "@apollo/client";
import { getCollegeDetails } from "@/graphql/collegeQuery/collegeDetails";
import { convertQueryDataToTabSections } from "@/utils/customText";

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
    loading,
    error,
    data: collegeData,
  } = useQuery(getCollegeDetails, {
    variables: { ID: collegeId },
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

  const asideSection = [
    {
      videoGallery:
        collegeData?.college?.data?.attributes?.videoGallery?.flatMap(
          (gallery: any) => gallery?.video?.map((video: any) => video?.videoId),
        ),
      imageGallery:
        collegeData?.college?.data?.attributes?.imageGallery?.flatMap(
          (gallery: any) =>
            gallery?.images?.data?.map((image: any) => image?.attributes?.url),
        ),
      banner: {
        title: "Are You Interested in this College?",
        brochureUrl:
          collegeData?.college?.data?.attributes?.brochureFile?.data?.attributes
            ?.url,
      },
      topCourses: [
        {
          breadCrumb: "Top Courses",
          id: "3",
          duration: "333",
          fees: "10000",
        },
      ],
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
      />
      <Banner1 data={banner1} />
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeDetailBanner from "@/components/bannerSections/CollegeDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { collegePage, colleges } from "@/data/collegeData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";

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
    if (collegeData?.colleges?.data?.attributes?.PageData) {
      const convertedData = convertQueryDataToTabSections(
        collegeData?.colleges?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [collegeData]);
  console.log(collegeData);
  const college = collegeData?.colleges?.data?.attributes;

  return (
    <>
      <CollegeDetailBanner
        bgImage={college?.bgImage?.url}
        city={college?.location?.city}
        state={college?.location?.state}
        overallRating={college?.reviewsAndRatings?.overallRating}
        totalReviews={college?.reviewsAndRatings?.totalReviews}
        affiliation={college?.affiliation}
        brochureUrl={college?.brochureUrl}
        collegeName={college?.collegeName}
        estYear={college?.estYear}
        collegeLogo={college?.collegeLogo?.url}
        collegeCategory={college?.collegeCategory}
      />

      <PageTabsWithDetail data={tabSelectionArray} asideData={asideSection} />
      <Banner1 data={banner1} />
    </>
  );
}

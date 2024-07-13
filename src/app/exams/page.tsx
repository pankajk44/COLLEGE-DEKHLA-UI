"use client";
import React from "react";
import { examsListingPage, exams } from "@/data/examData";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1, tabsSections } from "@/data/globalData";
import ExamListingBanner from "@/components/bannerSections/ExamListingBanner";
import ExamListSection from "@/components/examsListingPageSections/ExamListSection";
import { getExamListingPageBanner } from "@/graphql/examQuery/exams";
import { useQuery } from "@apollo/client";

export default function Exams() {
  // Query
  const {
    data: bannerData,
    loading,
    error,
  } = useQuery(getExamListingPageBanner);
  return (
    <>
      <ExamListingBanner
        data={examsListingPage?.banner}
        title={bannerData?.examListingPages?.data?.[0]?.attributes?.title}
        bgImg={
          bannerData?.examListingPages?.data?.[0]?.attributes?.bgImg?.data
            ?.attributes?.url
        }
        imgArray={bannerData?.examListingPages?.data?.[0]?.attributes?.photos?.data?.map(
          (img: any) => img?.attributes?.url,
        )}
        totalExamsFound={bannerData?.exams?.meta?.pagination?.total}
      />
      <ExamListSection
        data={exams}
        filterBy={examsListingPage?.filterBy}
        tabsSections={tabsSections}
      />
      <Banner1 data={banner1} />
    </>
  );
}

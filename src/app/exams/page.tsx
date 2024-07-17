"use client";
import React from "react";
import { examsListingPage, exams } from "@/data/examData";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1, tabsSections } from "@/data/globalData";
import ExamListingBanner from "@/components/bannerSections/ExamListingBanner";
import ExamListSection from "@/components/examsListingPageSections/ExamListSection";
import { useQuery } from "@apollo/client";
import { getAllExams } from "@/graphql/examQuery/exams";

export default function Exams() {
  // const streams = ["Engineering"];
  // const ExaminationLevels = ["National"];
  // const eligibilityLevels = ["B.Sc"];
  // const modes = ["both"];
  const {
    data: examData,
    loading,
    error,
  } = useQuery(getAllExams, {
    // variables: {
    //   streams: streams,
    //   ExaminationLevels: ExaminationLevels,
    //   eligibilityLevels: eligibilityLevels,
    //   modes: modes,
    // },
  });
  console.log("courseData:", examData);

  return (
    <>
      <ExamListingBanner data={examsListingPage?.banner} />
      <ExamListSection
        data={exams}
        filterBy={examsListingPage?.filterBy}
        tabsSections={tabsSections}
      />
      <Banner1 data={banner1} />
    </>
  );
}

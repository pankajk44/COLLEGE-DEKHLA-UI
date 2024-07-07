"use client";
import React from "react";
import { examsListingPage, exams } from "@/data/examData";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1, tabsSections } from "@/data/globalData";
import ExamListingBanner from "@/components/bannerSections/ExamListingBanner";
import ExamListSection from "@/components/examsListingPageSections/ExamListSection";

export default function Exams() {
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
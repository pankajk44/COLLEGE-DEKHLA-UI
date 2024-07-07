"use client";
import Banner1 from "@/components/bannerSections/Banner1";
import ExamDetailBanner from "@/components/bannerSections/ExamDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { exams } from "@/data/examData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";
import React from "react";

export default function ExamDetailsPage() {
  return (
    <>
      {/* <ExamDetailBanner
        breadCrumb={exams?.[0]?.breadCrumb}
        examName={exams?.[0]?.examName}
        titleAddition={exams?.[0]?.titleAddition}
        examLogo={exams?.[0]?.logo?.url}
        brochureUrl={exams?.[0]?.brochureUrl}
        lastUpdate={exams?.[0]?.lastUpdate}
      /> */}
      <PageTabsWithDetail data={tabsSections} asideData={asideSection} />
      <Banner1 data={banner1} />
    </>
  );
}

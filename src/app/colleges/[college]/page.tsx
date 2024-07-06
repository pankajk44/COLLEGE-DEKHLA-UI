"use client";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeDetailBanner from "@/components/bannerSections/CollegeDetailBanner";
import DetailPageAsideSection from "@/components/DetailPageAsideSection";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import Wrapper from "@/components/Wrappers";
import { collegePage, colleges } from "@/data/collegeData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";
import React from "react";

export default function page() {
  return (
    <>
      <CollegeDetailBanner
        bgImage={colleges?.[0]?.bgImage?.url}
        city={colleges?.[0]?.location?.city}
        state={colleges?.[0]?.location?.state}
        overallRating={colleges?.[0]?.reviewsAndRatings?.overallRating}
        totalReviews={colleges?.[0]?.reviewsAndRatings?.totalReviews}
        affiliation={colleges?.[0]?.affiliation}
        brochureUrl={colleges?.[0]?.brochureUrl}
        collegeName={colleges?.[0]?.collegeName}
        estYear={colleges?.[0]?.estYear}
        collegeLogo={colleges?.[0]?.collegeLogo?.url}
        collegeCategory={colleges?.[0]?.collegeCategory}
      />

      <PageTabsWithDetail data={tabsSections} asideData={asideSection} />
      <Banner1 data={banner1} />
    </>
  );
}

"use client";
import Wrapper from "@/components/Wrappers";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeListingBanner from "@/components/bannerSections/CollegeListingBanner";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import CollegeListSection from "@/components/collegesListingPageSections/CollegeListSection";
import { collegePage, colleges } from "@/data/collegeData";
import { banner1, tabsSections } from "@/data/globalData";
import { getCollegeListingPageBanner } from "@/graphql/collegeQuery/colleges";
import { addCommas } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import React from "react";

export default function Colleges() {
  // Query
  const {
    data: bannerData,
    loading,
    error,
  } = useQuery(getCollegeListingPageBanner);

  return (
    <>
      <CollegeListingBanner
        title={bannerData?.courseListingPages?.data?.[0]?.attributes?.title}
        bgImg={
          bannerData?.courseListingPages?.data?.[0]?.attributes?.bgImg?.data
            ?.attributes?.url
        }
        imgArray={bannerData?.courseListingPages?.data?.[0]?.attributes?.photos?.data?.map(
          (img: any) => img?.attributes?.url,
        )}
        totalCollegesFound={bannerData?.courses?.meta?.pagination?.total}
      />
      <TopColleges
        data={colleges}
        totalCollegesFound={bannerData?.courses?.meta?.pagination?.total}
      />

      <CollegeListSection
        data={colleges}
        filterBy={collegePage?.filterBy}
        tabsSections={tabsSections}
        topColleges={colleges}
      />
      <Banner1 data={banner1} />
    </>
  );
}

function TopColleges({ data, totalCollegesFound }: any) {
  return (
    <Wrapper as="section" containerClassName="my-10">
      <h2 className="mb-5 text-3xl font-bold">
        <span className="text-orange-500">Top Colleges</span>{" "}
        <span className="text-black">in India based on ranking</span>{" "}
        {totalCollegesFound && (
          <span className="text-sm text-zinc-700">{`(found ${addCommas(totalCollegesFound)} colleges)`}</span>
        )}
      </h2>
      {/* Slider  */}
      <div className="topColleges relative">
        <CollegesSlider data={data} />
      </div>
    </Wrapper>
  );
}

"use client";
import Wrapper from "@/components/Wrappers";
import Banner1 from "@/components/bannerSections/Banner1";
import CollegeListingBanner from "@/components/bannerSections/CollegeListingBanner";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import CollegeListSection from "@/components/collegesListingPageSections/CollegeListSection";
import { collegePage, colleges } from "@/data/collegeData";
import { banner1, tabsSections } from "@/data/globalData";
import { getAllColleges } from "@/graphql/collegeQuery/colleges";
import { addCommas } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import React from "react";

export default function Colleges() {
   
  const range = "Top 10";
  const query = getAllColleges(range);

  const {
    data: collegeData,
    loading,
    error,
  } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("collegeData:", collegeData);
  return (
    <>
      <CollegeListingBanner
        data={collegePage?.banner}
        totalCollegesFound={34643}
      />
      <TopColleges data={colleges} totalCollegesFound={34643} />
      
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



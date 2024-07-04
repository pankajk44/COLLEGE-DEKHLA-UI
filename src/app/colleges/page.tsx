import Wrapper from "@/components/Wrappers";
import CollegeListingBanner from "@/components/bannerSections/CollegeListingBanner";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import { collegePage, colleges } from "@/data/collegeData";
import { addCommas } from "@/utils/customText";
import React from "react";

export default function Colleges() {
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
      />
    </>
  );
}

function TopColleges({ data, totalCollegesFound }: any) {
  return (
    <Wrapper as="section" containerClassName="my-10">
      <h2 className="text-3xl font-bold mb-5">
        <span className="text-orange-500">Top Colleges</span>{" "}
        <span className="text-black">in India based on ranking</span>{" "}
        {totalCollegesFound && <span className="text-sm text-zinc-700">{`(found ${addCommas(totalCollegesFound)} colleges)`}</span>}
      </h2>
       {/* Slider  */}
      <div className="topColleges relative">
          <CollegesSlider data={data} />
        </div>
    </Wrapper>
  );
}

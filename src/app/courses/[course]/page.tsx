"use client";
import Banner1 from '@/components/bannerSections/Banner1'
import CourseDetailBanner from '@/components/bannerSections/CourseDetailBanner';
import PageTabsWithDetail from '@/components/pageTabsWithDetail/PageTabsWithDetail'
import { courses } from '@/data/courseData';
import { asideSection, banner1, tabsSections } from '@/data/globalData'
import React from 'react'

export default function page() {
  return (
    <>
          <CourseDetailBanner
        breadCrumb={courses?.[0]?.breadCrumb}
        courseName={courses?.[0]?.courseName}
        titleAddition={courses?.[0]?.titleAddition}
        duration={courses?.[0]?.duration}
        avgFees={courses?.[0]?.avgFees}
        avgFeesFrom={courses?.[0]?.avgFees?.from}
        avgFeesTo={courses?.[0]?.avgFees?.to}
      />
          <PageTabsWithDetail data={tabsSections} asideData={asideSection} />
          <Banner1 data={banner1} />
    </>
  )
}

"use client";
import CourseListingBanner from "@/components/bannerSections/CourseListingBanner";
import CourseListSection from "@/components/coursesListingPageSections/CourseListSection";
import { coursePage, courses } from "@/data/courseData";
import { tabsSections } from "@/data/globalData";
import React from "react";

export default function Courses() {
  return (
    <>
      <CourseListingBanner
        title={coursePage?.banner?.title}
        bgImg={coursePage?.banner?.bgImg}
        totalCoursesFound={34643}
      />
      <CourseListSection
        data={courses}
        filterBy={coursePage?.filterBy}
        tabsSections={tabsSections}
      />
    </>
  );
}

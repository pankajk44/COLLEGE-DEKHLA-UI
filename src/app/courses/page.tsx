"use client"
import CourseListingBanner from "@/components/bannerSections/CourseListingBanner";
import CourseListSection from "@/components/coursesListingPageSections/CourseListSection";
import { coursePage, courses } from "@/data/courseData";
import { tabsSections } from "@/data/globalData";
import { getAllCourses } from "@/graphql/courseQuery/course";
import { useQuery } from "@apollo/client";
import React from "react";

export default function page() {
  const mode = "Regular"; 
  const duration = 4; 
  const { data: courseData, loading, error } = useQuery(getAllCourses, {
    variables: { mode: mode, duration: duration },
  });

    console.log("courseData:", courseData);
    

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

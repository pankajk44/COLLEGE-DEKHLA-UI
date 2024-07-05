"use client"
import { getAllColleges } from "@/graphql/collegeQuery/colleges";
import { getTopColleges } from "@/graphql/collegeQuery/topColleges";
import { useQuery } from "@apollo/client";
import React from "react";

export default function Home() {
  const {
    data: collegeData,
    loading: collegeLoader,
    error: collegeError,
  } = useQuery(getTopColleges);

  console.log("collegeData", collegeData);

  return (
    <>
      <div>Home page</div>
    </>
  );
}

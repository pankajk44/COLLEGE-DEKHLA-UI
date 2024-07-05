"use client";
import { getAllColleges } from "@/graphql/collegeQuery/colleges";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { data: collegeData, loading, error, fetchMore } = useQuery(getAllColleges, {
    variables: { start: start, limit: 1 },
  });

  const loadMoreColleges = () => {
    fetchMore({
      variables: { start: start + 1, limit: 1 },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.colleges.data.length) {
          setHasMore(false);
          return prevResult;
        }
        setStart(prev => prev + 1);
        return {
          colleges: {
            ...fetchMoreResult.colleges,
            data: [
              ...prevResult.colleges.data,
              ...fetchMoreResult.colleges.data,
            ],
          },
        };
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("collegeData", collegeData);

  return (
    <>
      <div>Home page</div>
      <div>
        <ul>
          {collegeData?.colleges.data.map((college: any) => (
            <li key={college.id}>{college.attributes.collegeName}</li>
          ))}
        </ul>
        {hasMore && (
          <button onClick={loadMoreColleges}>Show More</button>
        )}
      </div>
    </>
  );
};

export default Home;

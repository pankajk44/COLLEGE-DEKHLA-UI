"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAllColleges } from "@/graphql/collegeQuery/colleges";

const Home: React.FC = () => {
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [rating, setRating] = useState("4-5");
  const [avgFeePerYear, setAvgFeePerYear] = useState("100000-300000");
  const [ranking, setRanking] = useState(10); // Default ranking set to 10

  const { data: collegeData, loading, error, fetchMore, refetch } = useQuery(
    getAllColleges(rating, avgFeePerYear, ranking),
    {
      variables: { start: start, limit: ranking },
    }
  );

  const loadMoreColleges = () => {
    fetchMore({
      variables: { start: start + ranking, limit: ranking },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.colleges.data.length) {
          setHasMore(false);
          return prevResult;
        }
        setStart((prev) => prev + ranking);
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

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
    setStart(0);
    refetch({ start: 0, limit: ranking });
  };

  const handleAvgFeePerYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAvgFeePerYear(event.target.value);
    setStart(0);
    refetch({ start: 0, limit: ranking });
  };

  const handleRankingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRanking = parseInt(event.target.value, 10);
    setRanking(selectedRanking);
    setStart(0);
    refetch({ start: 0, limit: selectedRanking });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("collegeData", collegeData);

  return (
    <>
      <div>Home page</div>
      <div>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange}>
            <option value="5">5</option>
            <option value="4-5">4-5</option>
            <option value="3-4">3-4</option>
            <option value="2-3">2-3</option>
            <option value="<2">&lt;2</option>
          </select>
        </label>
        <label>
          Avg Fee Per Year:
          <select value={avgFeePerYear} onChange={handleAvgFeePerYearChange}>
            <option value="100000-300000">100000-300000</option>
            <option value="300000-500000">300000-500000</option>
            <option value="500000-800000">500000-800000</option>
            <option value="800000-1000000">800000-1000000</option>
            <option value="1000000-1200000">1000000-1200000</option>
            <option value="1200000-1500000">1200000-1500000</option>
            <option value="1500000-2000000">1500000-2000000</option>
            <option value="2000000-2500000">2000000-2500000</option>
          </select>
        </label>
        <label>
          Ranking:
          <select value={ranking} onChange={handleRankingChange}>
            <option value="10">Top 10</option>
            <option value="20">Top 20</option>
            <option value="30">Top 30</option>
            <option value="40">Top 40</option>
            <option value="50">Top 50</option>
            <option value="60">Top 60</option>
            <option value="70">Top 70</option>
            <option value="80">Top 80</option>
            <option value="90">Top 90</option>
            <option value="100">Top 100</option>
          </select>
        </label>
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

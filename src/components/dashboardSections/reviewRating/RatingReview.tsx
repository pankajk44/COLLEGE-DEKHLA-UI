"use client";

import { StarRating } from "@/components/StarRating";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaRegEdit } from "react-icons/fa";

interface ReviewData {
  id: number;
  heading: string;
  details: string;
  rating: number;
}

interface Review {
  id: number;
  title: string;
  quote: string;
  date: string;
  reviewdata: ReviewData[];
}

export function RatingReview() {
  const reviews: Review[] = [
    {
      id: 1,
      title: "When will JEE Main B.Planning 2024 be conducted?",
      quote: "Asked by Akshat",
      date: "Mar 25, 2024 11:52:05",
      reviewdata: [
        {
          id: 1,
          heading: "Overall",
          details:
            "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provides a great academic environment.",
          rating: 5,
        },
        {
          id: 2,
          heading: "Placement",
          details:
            "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provides a great academic environment.",
          rating: 4,
        },
      ],
    },
    {
      id: 2,
      title: "When will JEE Main B.Planning 2024 be conducted?",
      quote: "Asked by Akshat",
      date: "Mar 25, 2024 11:52:05",
      reviewdata: [
        {
          id: 1,
          heading: "Overall",
          details:
            "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provides a great academic environment.",
          rating: 5,
        },
        {
          id: 2,
          heading: "Placement",
          details:
            "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provides a great academic environment.",
          rating: 4,
        },
      ],
    },
  ];

  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({});

  const toggleReview = (id: number) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">
        Your Reviews{" "}
        <span className="float-right text-2xl text-zinc-600">
          <FaRegEdit />
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {reviews.map((review, index) => (
          <div key={review.id} className="space-y-2 border-2 rounded-xl p-7 max-sm:p-6">
            <div
              className="flex flex-nowrap justify-between items-start  cursor-pointer"
              onClick={() => toggleReview(review.id)}
            >
              <h3 className="font-extrabold text-4xl sm:text-5xl text-orange-300 mr-4">
                {index + 1}
              </h3>
              <div className="w-full ">
                <div className="flex flex-nowrap justify-between w-full">
                  <div>
                <h4 className="text-2xl sm:text-3xl  font-medium">
                  {review.title}
                  
                    {/* {expandedReviews[review.id] ? <FaChevronUp className="text-xl ml-4" /> : <FaChevronDown className="text-xl ml-4" />} */}
              
                </h4>
                <p className="text-sm">
                  {review.quote} | {review.date}
                </p>
                </div>                    <FaRegEdit className="!text-[20px]  min-w-[20px]"/>

</div>
                {expandedReviews[review.id] && (
                  <div className="w-full mt-5">
                    {review.reviewdata.map((data) => (
                      <div key={data.id} className="mb-4">
                        <div className="lg:flex w-full lg:flex-nowrap lg:justify-between lg:items-center">
                          <p className="my-5   font-bold text-black "> {data.heading}: 
                            <span className="text-lg text-zinc-800 font-normal ml-2">
                {data.details}<StarRating
                            rating={data.rating}
                            totalStars={5}
                            className="ml-4 mb-2 text-lg text-orange-500 lg:hidden max-w-min float-right"
                          /></span>
                          </p>
                          <StarRating
                            rating={data.rating}
                            totalStars={5}
                            className="ml-4 text-lg text-orange-500 max-lg:hidden"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

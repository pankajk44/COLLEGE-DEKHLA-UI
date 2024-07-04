"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({data}:any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="mb-10 w-full border-t border-zinc-400 bg-blue-100">
      <Wrapper className="flex flex-col gap-y-5 p-5 md:p-10">
        <h1 className="title1">
          {data?.title?.t1 && <span className="text-blue-950/70">{data.title.t1}</span>}{" "}
          {data?.title?.t2 && <span className="text-blue-950">{data.title.t2}</span>}{" "}
          {data?.title?.t3 && <span className="text-blue-500">{data.title.t3}</span>}{" "}
        </h1>
        <div className="flex items-center gap-x-2 ">
          <Image
            src={data?.author?.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div>
            {data?.author?.name && (
              <p className="font-bold">{data?.author?.name}</p>
            )}
            {data?.author?.lastUpdated && (
              <p className="font-medium">Last Updated: {data?.author?.lastUpdated}</p>
            )}

          </div>
        </div>
        <div
          className={`text-justify ${isExpanded ? "" : "line-clamp-4"}`}
          dangerouslySetInnerHTML={{ __html: data.article }}
        />
        <button
          onClick={toggleReadMore}
          className="font-medium text-right hover:text-blue-500"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </Wrapper>
    </section>
  );
}

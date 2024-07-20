"use client";
import React, { ChangeEvent, useState } from "react";
import { Button, LoadingButton } from "@/components/Button";
import Notification from "@/components/notification/Notification";
import { newsPage } from "@/data/newsData";
import Wrapper from "@/components/Wrappers";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import CollegePredictor from "@/components/bannerSections/CollegePredictor";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1, collegePredictor } from "@/data/globalData";
import { SearchResult } from "@/components/newsSections/SearchResult";
import { Card1 } from "@/components/newsSections/Card1";
import { Search } from "@/components/newsSections/Search";
import { getAllNews } from "@/graphql/newsQuery/news";
import { useQuery } from "@apollo/client";
import { formatRupee } from "@/utils/customText";
import { getAllTopCourses } from "@/graphql/courseQuery/topCourses";

export default function Page() {
  return (
    <section className="w-full pt-32 max-md:pt-28">
      {newsPage?.notification?.list?.length > 0 && (
        <Notification data={newsPage?.notification?.list} />
      )}
      <Search />
      {/* <CollegePredictor data={collegePredictor} /> */}
      <LatestNewsAndArticles />
      <Banner1 data={banner1} />
    </section>
  );
}

function Card2({ item }: any) {
  return (
    <div className="mb-4 flex items-center gap-5 border-b border-orange-500 pb-3">
      <div className="flex flex-col gap-1">
        <Link
          href={`news/${item?.id}|| #`}
          className="cursor-pointer font-bold"
        >
          <h6 className="cursor-pointer hover:text-orange-500">
            {item?.title}
          </h6>
        </Link>
        <div className="flex gap-5 text-xs capitalize text-orange-500">
          <p className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-black" />
            {item?.timeStamp}
          </p>
          <p className="flex items-center gap-2">
            <BsClipboardCheck className="text-black" />
            {item?.category}
          </p>
        </div>
        <p className="line-clamp-2 text-sm">{item?.text}</p>
      </div>
      <Image src={item?.icon?.url} alt="CD" width={100} height={100} />
    </div>
  );
}

function LatestNewsAndArticles() {
  const [pageNo, SetPageNo] = useState(1);
  // query
  const {
    data: latestNewsData,
    loading: latestNewsDataLoading,
    error: latestNewsDataError,
  } = useQuery(getAllNews, {
    variables: {
      page: pageNo,
      pageSize: 10,
    },
  });
  // console.log(latestNewsData?.news?.data, "latestNewsData");
  const latestNews = latestNewsData?.news?.data?.map((item: any) => {
    return {
      id: item?.id,
      slug: item?.attributes?.slug,
      title: item?.attributes?.title,
      text: item?.attributes?.excerpt,
      timeStamp: item?.attributes?.updatedAt,
      icon: item?.attributes?.icon?.data?.attributes?.url,
      category: item?.attributes?.category?.data?.attributes?.category,
    };
  });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "exam", "college"];

  const filteredData =
    selectedCategory === "all"
      ? latestNews
      : latestNews?.filter((item: any) => item?.category === selectedCategory);

  const handleLoadMore = () => {
    SetPageNo((prev: number) => prev + 1);
  };
  return (
    <Wrapper as="main" className="my-10">
      <h2 className="mb-5 text-2xl font-bold">Latest News and Articles</h2>
      {/* filter buttons  */}
      <div className="mb-5 flex gap-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full px-5 py-2 capitalize ${
              selectedCategory === category ? "bg-orange-500" : "bg-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="grid grid-cols-12 gap-4">
        <article className="col-span-12 lg:col-span-9">
          <ul className="mb-5 flex flex-col gap-4">
            {filteredData?.map((item: any) => (
              <li key={item.id}>
                <Card1 item={item} />
              </li>
            ))}
          </ul>
          {latestNewsData?.news?.meta?.pagination?.total >
            filteredData?.length && (
            <LoadingButton onClick={handleLoadMore} className="mx-auto">
              Load More
            </LoadingButton>
          )}
        </article>
        {/* Aside Section  */}
        <aside className="col-span-3 flex flex-col gap-4 max-lg:hidden">
          {/* Notification  */}
          <div className="rounded-lg bg-white px-2 pt-5 shadow-lg">
            <h2 className="mb-4 border-b border-orange-500 pb-3 text-xl font-bold">
              Notification
            </h2>
            {latestNews?.slice(0, 3)?.map((item: any) => (
              <React.Fragment key={item?.id}>
                <Card2 item={item} />
              </React.Fragment>
            ))}
          </div>
          {/* Top Courses  */}
          <AsideTopCourses />
        </aside>
      </section>
    </Wrapper>
  );
}

function AsideTopCourses({ latestNews }: any) {
  const {
    loading: topCourseLoading,
    error: topCourseError,
    data: topCourseData,
  } = useQuery(getAllTopCourses, {
    variables: {
      page: 1,
      pageSize: 3,
    },
  });

  const topCourses = topCourseData?.courses?.data?.map((item: any) => ({
    id: item?.id,
    breadCrumb: item?.attributes?.courseName,
    duration: item?.attributes?.duration?.data?.attributes?.duration,
    fees: (item?.attributes?.avgFees?.from + item?.attributes?.avgFees?.to) / 2,
  }));

  return (
    <div className="w-full rounded-2xl bg-white p-5">
      <h2 className="border-b-2 border-orange-500 pb-5 text-xl font-bold">
        Top Courses
      </h2>
      <ul className="mb-5 flex flex-col">
        {topCourses?.map((item: any, index: number) => (
          <li key={index} className="border-b-2 border-orange-500 py-5">
            <Link href={item?.id ? `/courses/${item?.id}` : `#`}>
              <h6 className="text-xl font-medium">{item?.breadCrumb}</h6>
            </Link>
            <p className="flex gap-2">
              <span>Course Duration :</span>
              <span className="text-orange-500">{item?.duration} months</span>
            </p>
            <p className="flex gap-2">
              <span className="text-orange-500">
                INR {formatRupee(item?.fees)}
              </span>
              <span>avg. yearly fees</span>
            </p>
          </li>
        ))}
      </ul>
      <Link href="/courses" className="!w-full">
        <Button variant="white" className="!w-full text-nowrap shadow-lg">
          View More
        </Button>
      </Link>
    </div>
  );
}

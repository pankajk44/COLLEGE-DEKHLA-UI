"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
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

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("IIT Bombay News and Article");
  return (
    <section className="mt-[5rem] w-full">
      {newsPage?.notification?.list?.length > 0 && (
        <Notification data={newsPage?.notification?.list} />
      )}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {newsPage?.searchResults?.length > 0 && (
        <SearchResult
          searchResult={searchTerm}
          data={newsPage?.searchResults}
        />
      )}
      <LatestNewsAndArticles data={newsPage?.news} />
      <CollegePredictor data={collegePredictor} />
      <MoreNewsSection data={newsPage?.news} />
      <Banner1 data={banner1} />
    </section>
  );
}

export function Search({ searchTerm, setSearchTerm }: any) {
  function handleInputChange(event: any) {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  }

  function handleSubmit() {
    // console.log(searchTerm);
    // Add submit logic here
  }

  return (
    <Wrapper
      as="div"
      bgColor="bg-transparent"
      containerClassName="px-10 py-10"
      className="!md:pr-2 text-primary-text focus-within:border-secondary-text flex h-12 items-center gap-4 rounded-xl bg-white py-2 !pr-2 shadow-md max-md:mt-5"
    >
      <input
        className="w-full pl-5 focus:outline-none max-md:p-3"
        type="text"
        placeholder="Search for colleges, courses etc."
        value={searchTerm}
        onChange={handleInputChange}
        min={3}
      />
      <Button variant="black" className="text-sm" onClick={handleSubmit}>
        Submit
      </Button>
    </Wrapper>
  );
}

export function SearchResult({ data, searchResult }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "exam", "college"];

  const filteredData =
    selectedCategory === "all"
      ? data
      : data?.filter((item: any) => item.category === selectedCategory);

  return (
    <Wrapper as="div" className="mb-16">
      <h2 className="my-5 text-2xl font-bold">
        Search Results for{" "}
        <span className="text-orange-500">&quot;{searchResult}&quot;</span>
      </h2>
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
      <ul className="flex flex-col gap-4">
        {filteredData?.map((item: any) => (
          <li key={item.id}>
            <Card1 item={item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

function LatestNewsAndArticles({ data }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "exam", "college"];

  const filteredData =
    selectedCategory === "all"
      ? data
      : data?.filter((item: any) => item.category === selectedCategory);

  return (
    <Wrapper as="div" className="mb-16">
      <h2 className="my-5 text-2xl font-bold">Latest News and Articles</h2>
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
      <ul className="flex flex-col gap-4">
        {filteredData?.map((item: any) => (
          <li key={item.id}>
            <Card1 item={item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

function Card1({ item }: any) {
  return (
    <div className="flex items-center gap-5 rounded-lg bg-white p-5 shadow-xl">
      <Image src={item?.icon?.url} alt="CD" width={100} height={100} />
      <div className="flex flex-col gap-3">
        <Link href={item?.href || "#"} className="text-xl font-bold">
          <h6>{item?.title}</h6>
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
        <p>
          {item?.text}
          <span className="relative right-0 text-orange-500 underline">
            <Link href={item?.href || "#"}>Read More</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
function Card2({ item }: any) {
  return (
    <div className="mb-4 flex items-center gap-5 border-b border-zinc-800 pb-3">
      <div className="flex flex-col gap-1">
        <Link href={item?.href || "#"} className="font-bold">
          <h6>{item?.title}</h6>
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

function MoreNewsSection({ data }: any) {
  return (
    <Wrapper as="main" className="my-10">
      <h2 className="my-5 mb-5 text-2xl font-bold">More News</h2>
      <section className="grid grid-cols-12 gap-4">
        <article className="col-span-12 lg:col-span-9">
          <ul className="flex flex-col gap-4">
            {data?.map((item: any) => (
              <li key={item?.id}>
                <Card1 item={item} />
              </li>
            ))}
          </ul>
        </article>
        <aside className="col-span-3 flex flex-col gap-4 max-lg:hidden">
          {/* Notification  */}
          <div className="rounded-lg bg-white px-2 pt-5 shadow-lg">
            <h2 className="mb-4 border-b border-zinc-800 pb-3 text-xl font-bold">
              Notification
            </h2>
            {data?.slice(0, 3)?.map((item: any) => (
              <React.Fragment key={item?.id}>
                <Card2 item={item} />
              </React.Fragment>
            ))}
          </div>
          {/* Top Courses  */}
          <div className="rounded-lg bg-white px-2 pt-5 shadow-lg">
            <h2 className="mb-4 border-b border-zinc-800 pb-3 text-xl font-bold">
              Top Courses
            </h2>
            {data?.slice(0, 3)?.map((item: any) => (
              <React.Fragment key={item?.id}>
                <Card2 item={item} />
              </React.Fragment>
            ))}
          </div>
        </aside>
      </section>
    </Wrapper>
  );
}

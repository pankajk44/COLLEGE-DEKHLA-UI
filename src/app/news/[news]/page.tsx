"use client";
import React, { useState } from "react";
import Notification from "@/components/notification/Notification";
import { newsPage } from "@/data/newsData";
import { Search, SearchResult } from "../page";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1 } from "@/data/globalData";

export default function page() {
    const [searchTerm, setSearchTerm] = useState<string>("IIT Bombay News and Article");
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
      <Banner1 data={banner1} />
    </section>
  )
}

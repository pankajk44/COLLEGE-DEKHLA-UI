"use client";
import React, { useState } from "react";
import Notification from "@/components/notification/Notification";
import { newsPage } from "@/data/newsData";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1 } from "@/data/globalData";
import { SearchResult } from "@/components/newsSections/SearchResult";
import { Search } from "@/components/newsSections/Search";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("IIT Bombay News and Article");

  return (
    <section className="mt-[5rem] w-full">
      {newsPage?.notification?.list?.length > 0 && (
        <Notification data={newsPage.notification.list} />
      )}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {newsPage?.searchResults?.length > 0 && (
        <SearchResult data={newsPage.searchResults} searchTerm={searchTerm}  />
      )}
      <Banner1 data={banner1} />
    </section>
  );
}

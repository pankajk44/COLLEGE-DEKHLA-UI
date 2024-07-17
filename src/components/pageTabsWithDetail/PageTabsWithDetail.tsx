"use client";
import Wrapper from "@/components/Wrappers";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import DetailPageAsideSection from "../DetailPageAsideSection";
import { useRouter, useSearchParams } from "next/navigation";

export function PageTabsWithDetailWrapperContent({
  data,
  asideData,
  slug,
  tabUrlValue,
}: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (typeof tab === "string") {
      // Check if tab is a string
      const index = data.findIndex(
        (item: any) => item.navItem.toLowerCase() === tab.toLowerCase(),
      );
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  }, [tab, data]);

  const handleSelect = (index: any) => {
    setSelectedIndex(index);
    // Update the URL with the selected tab
    const selectedTab = data[index].navItem.toLowerCase();
    router.push(
      `/${tabUrlValue}/${slug}?tab=${encodeURIComponent(selectedTab)}`,
    ); // Adjust the URL as necessary
  };

  return (
    <Wrapper containerClassName="my-5 " className="flex w-full flex-col pt-0">
      <Navbar
        navItems={data}
        onSelect={handleSelect}
        selectedIndex={selectedIndex}
      />
      <main className="flex gap-5 md:flex-row">
        <Content selectedContent={data?.[selectedIndex]} />
        <DetailPageAsideSection data={asideData} />
      </main>
    </Wrapper>
  );
}

export default function PageTabsWithDetail({
  data,
  asideData,
  slug,
  tabUrlValue,
}: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageTabsWithDetailWrapperContent
        data={data}
        asideData={asideData}
        slug={slug}
        tabUrlValue={tabUrlValue}
      />
    </Suspense>
  );
}

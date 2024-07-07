"use client";
import Wrapper from "@/components/Wrappers";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import DetailPageAsideSection from "../DetailPageAsideSection";

export default function PageTabsWithDetail({ data, asideData }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <Wrapper
      containerClassName="my-5 p-5"
      className="flex w-full flex-col p-5 pt-0"
    >
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

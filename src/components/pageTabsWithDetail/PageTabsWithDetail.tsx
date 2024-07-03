"use client";
import Wrapper from "@/components/Wrappers";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function PageTabsWithDetail({ data }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <section className="mb-14 w-full">
      <Wrapper>
        <Navbar
          navItems={data}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
        <Content selectedContent={data?.[selectedIndex]} />
      </Wrapper>
    </section>
  );
}

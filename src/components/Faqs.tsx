"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Wrapper from "./Wrappers";

export default function Faqs({ data, className = "" }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
      <Wrapper as="section" className="my-10">
        {/* Title  */}
        {data?.title?
          <h1 className="title1 mb-8">
            FAQ&apos;s
          </h1> :         <h1 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">Let’s clear some Doubts</h1>
        }
        <div className={`flex flex-col gap-4 ${className} lg:px-40`}>
          {data?.map((faq: any, index: number) => (
            <div key={faq.id} className="mb-4 shadow-lg rounded-2xl px-6 bg-white py-2 pt-4">
              {faq?.question && (
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-medium">{faq?.question}</span>
                  <IoIosArrowDown
                    className={`transform text-xl transition-transform ${
                      openFaq === faq.id || (index === 0 && openFaq === null)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              )}
              {faq?.answer && (
                <div
                  className={`mt-2 transition-all duration-300 ease-in-out ${
                    openFaq === faq?.id || (index === 0 && openFaq === null)
                      ? "max-h-96"
                      : "max-h-0 overflow-hidden"
                  }`}
                ><hr className="my-2"/>
                  <p className="text-justify text-zinc-500 my-3   ">
                    <TextWithLineBreak text={faq?.answer} />
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Wrapper>
  );
}

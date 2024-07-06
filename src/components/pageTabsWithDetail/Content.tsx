"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";
import { Button } from "../Button";
import TimelineList from "../TimelineList";

export default function Content({ selectedContent }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isMobile = useIsMobile(1030); // breakpoint

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {selectedContent &&
        selectedContent?.sections?.length > 0 &&
        selectedContent?.sections?.map((section: any, index: any) => {
          const articleLength = section?.article?.length || 0;
          return (
            <div
              key={index}
              className="mt-5 w-full border-b border-zinc-300 pb-5"
            >
              {/* Title */}
              {section?.title && (
                <h2 className="my-5 text-2xl font-bold">{section?.title}</h2>
              )}
              {/* Author */}
              {section?.author && (
                <div className="mb-8 flex items-center gap-x-2">
                  {section?.author?.avatar && (
                    <Image
                      src={section?.author?.avatar?.url}
                      alt="avatar"
                      className="h-12 w-12 rounded-full"
                      width={48}
                      height={48}
                    />
                  )}
                  <div>
                    {section?.author?.name && (
                      <p className="font-bold">{section?.author?.name}</p>
                    )}
                    {section?.author?.lastUpdated && (
                      <p className="font-medium">
                        Last Updated: {section.author.lastUpdated}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {/* Quote  */}
              {section?.quote && (
                <>
                  <div
                    className={`mb-5 ml-2 text-wrap border-l-4 border-orange-500 bg-orange-100 py-2 pl-5 text-justify text-lg font-medium text-black ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.quote }}
                  />
                </>
              )}
              {/* Article */}
              {section?.article && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle mb-5 text-justify ${isExpanded ? "" : "line-clamp-4"}`}
                    dangerouslySetInnerHTML={{ __html: section.article }}
                  />
                  {/* {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-orange-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )} */}
                </>
              )}
              {/* Buttons */}
              {section?.button && (
                <div className="mb-5 flex gap-2 max-sm:flex-col">
                  {section.button.button1?.text && (
                    <Link href={section.button.button1.link || "#"}>
                      <Button variant="black" className="text-nowrap">
                        {section.button.button1.text}
                      </Button>
                    </Link>
                  )}
                  {section.button.button2?.text && (
                    <Link href={section.button.button2.link || "#"}>
                      <Button variant="orange" className="text-nowrap">
                        {section.button.button2.text}
                      </Button>
                    </Link>
                  )}
                </div>
              )}
              {/* Table  */}
              {section?.table && (
                <div
                  className="dangerouslySetInnerHTMLStyle mb-8 w-full overflow-x-auto text-justify"
                  dangerouslySetInnerHTML={{ __html: section?.table }}
                />
              )}
              {/* Important Links  */}
              {section?.importantLinks && (
                <div>
                  {section?.title && (
                    <h2 className="my-5 text-2xl font-bold">
                      {section?.importantLinks?.title}
                    </h2>
                  )}
                  <ul className="mb-5">
                    {section?.importantLinks?.links?.map(
                      (link: any, i: number) => (
                        <li key={i} className="mb-2 flex font-bold">
                          <h6 className="text-black">{link.title}:</h6>
                          <span className="ml-1">
                            <Link
                              className="text-blue-950/70 underline hover:text-blue-500"
                              href={link?.href || "#"}
                            >
                              {link?.text}
                            </Link>
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              {/* banner  */}
              {section?.banner && (
                <div className="relative my-5">
                  <Image
                    src={section?.banner?.img?.url}
                    alt="banner"
                    width={1700}
                    height={480}
                    className="h-96 w-full object-cover object-center"
                  />
                  <p className="absolute bottom-0 left-0 w-full text-wrap bg-orange-500 bg-opacity-60 px-5 py-3 text-white">
                    <Link href={section?.banner?.href || "#"}>
                      {section?.banner?.text}
                    </Link>
                  </p>
                </div>
              )}
              {/* Semester  */}
              {section?.accordion && <TimelineList data={section?.accordion} />}
            </div>
          );
        })}
    </>
  );
}

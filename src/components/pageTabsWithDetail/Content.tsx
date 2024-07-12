"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";
import { Button } from "../Button";
import TimelineList from "../TimelineList";
import YoutubeVideo from "../youtubeVideo";
import { StarRating } from "../StarRating";
import { FaStar } from "react-icons/fa";

export default function Content({ selectedContent }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  // const isMobile = useIsMobile(1030);
  // const toggleReadMore = () => {
  //   setIsExpanded((prev) => !prev);
  // };

  return (
    <>
      {selectedContent &&
        selectedContent?.sections?.length > 0 &&
        selectedContent?.sections?.map((section: any, index: any) => {
          const articleLength = section?.article?.length || 0;
          // Function to group images by category
          const groupByCategory = (images: any) => {
            return images?.reduce((acc: any, image: any) => {
              (acc[image?.category] = acc[image?.category] || []).push(image);
              return acc;
            }, {});
          };
          const groupedImages = groupByCategory(section?.imageGallery?.images);
          const groupedVideos = groupByCategory(section?.videoGallery?.videos);
          return (
            <div
              key={index}
              className="mt-5 w-full rounded-2xl bg-white p-5 md:min-w-[550px] md:[flex:8]"
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
                    className={`my-2 mb-5 text-wrap border-l-4 border-orange-500 py-2 pl-5 text-justify text-lg font-medium text-black ${
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
              {/* Important Links  */}
              {section?.importantLinks && (
                <div className="my-5">
                  {section?.title && (
                    <h2 className="mb-5 text-2xl font-bold">
                      {section?.importantLinks?.title}
                    </h2>
                  )}
                  <ul className="ml-5">
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
                  <p className="absolute bottom-0 left-0 w-full text-wrap bg-black bg-opacity-60 px-5 py-3 text-white">
                    <Link href={section?.banner?.href || "#"}>
                      {section?.banner?.text}
                    </Link>
                  </p>
                </div>
              )}
              {/* Accordion  */}
              {section?.accordion && <TimelineList data={section?.accordion} />}
              {/* Photo Gallery  */}
              {section?.imageGallery && section?.imageGallery?.images && (
                <>
                  {section?.imageGallery?.title && (
                    <h2 className="border-b border-zinc-500 py-5 text-2xl font-bold">
                      {section?.imageGallery?.title?.t1 && (
                        <span className="text-black">
                          {section?.imageGallery?.title?.t1}
                        </span>
                      )}{" "}
                      {section?.imageGallery?.title?.t2 && (
                        <span className="text-orange-500">
                          {section?.imageGallery?.title?.t2}
                        </span>
                      )}{" "}
                      {section?.imageGallery?.title?.t3 && (
                        <span className="text-black">
                          {section?.imageGallery?.title?.t3}
                        </span>
                      )}{" "}
                    </h2>
                  )}
                  {Object.keys(groupedImages).map((category, index) => (
                    <div key={index} className="mt-5">
                      <h3 className="my-3 text-xl font-semibold capitalize">
                        {category}
                      </h3>
                      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {groupedImages[category].map(
                          (image: any, i: number) => (
                            <Image
                              key={i}
                              src={image.url}
                              width={800}
                              height={800}
                              alt={`${category} image`}
                              className="h-full max-h-[200px] w-full flex-wrap rounded-lg object-cover"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
              {/* Video Gallery  */}
              {section?.videoGallery && section?.videoGallery?.videos && (
                <>
                  {section?.videoGallery?.title && (
                    <h2 className="border-b border-zinc-500 py-5 text-2xl font-bold">
                      {section?.videoGallery?.title?.t1 && (
                        <span className="text-black">
                          {section?.videoGallery?.title?.t1}
                        </span>
                      )}{" "}
                      {section?.videoGallery?.title?.t2 && (
                        <span className="text-orange-500">
                          {section?.videoGallery?.title?.t2}
                        </span>
                      )}{" "}
                      {section?.videoGallery?.title?.t3 && (
                        <span className="text-black">
                          {section?.videoGallery?.title?.t3}
                        </span>
                      )}{" "}
                    </h2>
                  )}
                  {Object.keys(groupedVideos).map((category, index) => (
                    <div key={index} className="mt-5">
                      <h3 className="my-3 text-xl font-semibold capitalize">
                        {category}
                      </h3>
                      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {groupedVideos[category].map(
                          (video: any, i: number) => (
                            <YoutubeVideo
                              videoId={video?.videoId}
                              width={"100%"}
                              height={"200"}
                              key={i}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
              {/* Separator  */}
              {section?.separator === true && (
                <div className="my-5 h-0.5 w-full bg-zinc-300"></div>
              )}
              {/* =================================================== */}
              {/* Review  */}
              {section?.reviewsAndRatings && (
                <ReviewsAndRatingsSection data={section?.reviewsAndRatings} />
              )}
            </div>
          );
        })}
    </>
  );
}

function RelatedCourses() {
  return <div></div>;
}

function ReviewsAndRatingsSection({ data }: any) {
  return (
    <div className="space-y-5">
      <div className="my-5 flex !h-auto items-center justify-around gap-16 max-md:flex-col">
        {/* Overall Rating Section  */}
        <div className="flex-center flex-col rounded-2xl bg-orange-200 p-5 sm:px-12">
          <h2 className="text-7xl font-semibold">{data?.overallRating}</h2>
          <div>
            <StarRating
              rating={data?.overallRating}
              className="gap-2 text-lg text-orange-500"
            />
          </div>
          <p>{data?.totalReviews} Reviews</p>
        </div>
        {/* Rating according to number  */}
        <div className="!h-auto w-1/2 space-y-2">
          <div className="!my-3 flex items-center gap-3">
            <p className="mr-2 flex items-center gap-2 text-2xl font-semibold">
              5 <FaStar className="text-orange-500" />
            </p>
            <ProgressBar value={"90"} />
            <p className="ml-2 text-xl">(90%)</p>
          </div>
          <div className="!my-3 flex items-center gap-3">
            <p className="mr-2 flex items-center gap-2 text-2xl font-semibold">
              4 <FaStar className="text-orange-500" />
            </p>
            <ProgressBar value={"73"} />
            <p className="ml-2 text-xl">(73%)</p>
          </div>
          <div className="!my-3 flex items-center gap-3">
            <p className="mr-2 flex items-center gap-2 text-2xl font-semibold">
              3 <FaStar className="text-orange-500" />
            </p>
            <ProgressBar value={"44"} />
            <p className="ml-2 text-xl">(44%)</p>
          </div>
          <div className="!my-3 flex items-center gap-3">
            <p className="mr-2 flex items-center gap-2 text-2xl font-semibold">
              2 <FaStar className="text-orange-500" />
            </p>
            <ProgressBar value={"75"} />
            <p className="ml-2 text-xl">(75%)</p>
          </div>
          <div className="!my-3 flex items-center justify-between gap-3">
            <p className="mr-2 flex items-center gap-2 text-2xl font-semibold">
              1 <FaStar className="text-orange-500" />
            </p>
            <ProgressBar value={"30"} />
            <p className="ml-2 text-xl">(30%)</p>
          </div>
        </div>
      </div>
      <div className="my-5 flex justify-between gap-3 overflow-x-auto text-center sm:!mt-14">
        {data?.individualReviews
          ?.slice(0, 5)
          .map((review: any, index: number) => (
            <div key={index} className="flex-center flex-col">
              <div className="flex-center rounded-lg bg-orange-300 p-2">
                <Image
                  src={review?.icon?.url}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <p>{review?.title}</p>
              <p className="flex items-center gap-2">
                {review?.rating} <FaStar className="text-orange-500" />
              </p>
              {/* <p className="text-nowrap">based on ({review?.basedOn} )</p> */}
            </div>
          ))}
      </div>
    </div>
  );
}

function ProgressBar({ value }: any) {
  return (
    <div className="h-3 w-full min-w-60 rounded-full bg-orange-200">
      <div
        className={`h-3 rounded-full bg-orange-500`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

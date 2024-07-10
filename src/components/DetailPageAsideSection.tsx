import React from "react";
import YoutubeVideo from "./youtubeVideo";
import Image from "next/image";
import { Button } from "./Button";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

export default function DetailPageAsideSection({ data }: any) {
  return (
    <aside className="mt-5 flex min-w-[300px] flex-col gap-y-5 [flex:2] max-md:hidden max-md:bg-opacity-80">
      {data?.map((item: any, index: number) => (
        <React.Fragment key={index}>
          {/* Banner  */}
          {item?.banner && <Banner data={item?.banner} />}
          {/* Video Gallery  */}
          {item?.videoGallery && item?.videoGallery?.videos && (
            <VideoGallery data={item?.videoGallery?.videos} />
          )}
          {/* Photo Gallery */}
          {item?.imageGallery && item?.imageGallery?.images && (
            <PhotoGallery data={item?.imageGallery?.images} />
          )}
          {/* Top Courses  */}
          {item?.topCourses && <TopCourses data={item?.topCourses} />}
        </React.Fragment>
      ))}
    </aside>
  );
}

function VideoGallery({ data }: any) {
  return (
    <div className="w-full rounded-2xl bg-white p-5 pb-0">
      <h2 className="mb-5 text-xl">Videos</h2>
      {data
        ?.slice(0, 3)
        ?.map((item: any, index: number) => (
          <YoutubeVideo
            key={index}
            videoId={item?.videoId}
            width={"100%"}
            height={"200"}
            className="mb-5 rounded-xl"
          />
        ))}
    </div>
  );
}

function PhotoGallery({ data }: any) {
  return (
    <div className="w-full rounded-2xl bg-white p-5 pb-0">
      <h2 className="mb-5 text-xl">Images</h2>
      {data
        ?.slice(0, 3)
        ?.map((image: any, index: number) => (
          <Image
            key={index}
            src={image.url}
            width={800}
            height={800}
            alt={`image`}
            className="mb-5 h-full max-h-48 w-full rounded-lg object-cover"
          />
        ))}
    </div>
  );
}

function Banner({ data }: any) {
  return (
    <div className="flex-center w-full flex-col rounded-2xl bg-white p-5 text-center">
      <h2 className="mb-5 text-xl">{data?.title}</h2>
      <Button variant="white" className="text-nowrap shadow-lg mb-4">
        Apply Now
      </Button>
      <Link href={data?.brochureUrl} className="max-md:w-full">
        <Button variant="black" className="text-nowrap shadow-lg">
          <span>Download Brochure</span>
          <HiOutlineDownload />
        </Button>
      </Link>
    </div>
  );
}

function TopCourses({ data }: any) {
  return (
    <div className="w-full rounded-2xl bg-white p-5">
      <h2 className="border-b-2 border-orange-500 pb-5 text-xl">Top Courses</h2>
      <ul className="flex flex-col">
        {data?.map((item: any, index: number) => (
          <li
            key={index}
            className="flex gap-x-2 border-b-2 border-orange-500 py-5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

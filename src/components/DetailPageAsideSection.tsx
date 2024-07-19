import React from "react";
import YoutubeVideo from "./youtubeVideo";
import Image from "next/image";
import { Button } from "./Button";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { formatRupee } from "@/utils/customText";

export default function DetailPageAsideSection({ data }: any) {
  return (
    <aside className="mt-5 h-max min-w-[300px] space-y-5 [flex:2] max-md:hidden max-md:bg-opacity-80 md:sticky md:top-0">
      {data?.map((item: any, index: number) => (
        <React.Fragment key={index}>
          {/* Banner  */}
          {item?.banner && <Banner data={item?.banner} />}
          {/* Video Gallery  */}
          {item?.videoGallery && <VideoGallery data={item?.videoGallery} />}
          {/* Top Courses  */}
          {item?.topCourses && <TopCourses data={item?.topCourses} />}
          {/* Photo Gallery */}
          {item?.imageGallery && <PhotoGallery data={item?.imageGallery} />}
        </React.Fragment>
      ))}
    </aside>
  );
}

function VideoGallery({ data }: any) {
  return (
    <div className="h-max w-full rounded-2xl bg-white p-5 pb-0">
      <h2 className="mb-5 text-xl">Videos</h2>
      {data
        ?.slice(0, 3)
        ?.map((item: any, index: number) =>
          item ? (
            <YoutubeVideo
              key={index}
              videoId={item || ""}
              width={"100%"}
              height={"200px"}
              className="mb-5 rounded-xl"
            />
          ) : null,
        )}
    </div>
  );
}

function PhotoGallery({ data }: any) {
  return (
    <div className="w-full rounded-2xl bg-white p-5 pb-0">
      <h2 className="mb-5 text-xl">Images</h2>
      <div className="grid grid-cols-2 gap-2">
        {data
          ?.slice(0, 3)
          ?.map((image: any, index: number) => (
            <Image
              key={index}
              src={image}
              width={800}
              height={800}
              alt={`image`}
              className="col-span-1 mb-5 h-full max-h-48 w-full rounded-lg object-cover"
            />
          ))}
      </div>
    </div>
  );
}

function Banner({ data }: any) {
  return (
    <div className="flex-center w-full flex-col rounded-2xl bg-white p-5 text-center">
      <h2 className="mb-3 text-xl">{data?.title}</h2>
      <Button variant="white" className="mb-3 !w-full text-nowrap shadow-lg">
        Apply Now
      </Button>
      <Link href={data?.brochureUrl || "#"} className="!w-full">
        <Button variant="black" className="!w-full text-nowrap shadow-lg">
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
      <ul className="mb-5 flex flex-col">
        {data?.map((item: any, index: number) => (
          <li key={index} className="border-b-2 border-orange-500 py-5">
            <Link href={item?.id ? `/courses/${item?.id}` : `#`}>
              <h6 className="text-xl font-medium">{item?.breadCrumb}</h6>
            </Link>
            <p className="flex gap-2">
              <span>Course Duration :</span>
              <span className="text-orange-500">{item?.duration} months</span>
            </p>
            <p className="flex gap-2">
              <span className="text-orange-500">
                INR {formatRupee(item?.fees)}
              </span>
              <span>avg. yearly fees</span>
            </p>
          </li>
        ))}
      </ul>
      <Link href="/courses" className="!w-full">
        <Button variant="white" className="!w-full text-nowrap shadow-lg">
          View More
        </Button>
      </Link>
    </div>
  );
}

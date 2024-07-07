"use client";
import React from "react";
import Wrapper from "@/components/Wrappers";
import { Button } from "@/components/Button";
import  Search  from "./news/page";
import { homePageData } from "@/data/homeData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { courses } from "@/data/courseData";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import { collegePage, colleges } from "@/data/collegeData";
import { testimonials, CounsellingPackages, faqs, tabsSections } from "@/data/globalData";
import { newsPage } from "@/data/newsData";
import { exams, examsListingPage } from "@/data/examData";
import ExamFilteredCard from "@/components/cardsAndSliders/ExamFilteredCard";
import { ImCross } from "react-icons/im";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <>
      <HomeBanner
        title={homePageData?.HeroSection?.title}
        fullData={homePageData}
      />

      {/* Event & Webinars */}
      <div className="bg-zinc-200 p-3 pb-14">
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          Events and Webinars
        </h2>

        <Events data={homePageData?.eventsAndWebinars} />
      </div>
      {/* Top Colleges */}
      <div className="lg:px-40 p-6">
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          Top Colleges
        </h2>
        <div className=" topColleges relative ">
          <CollegesSlider data={colleges} mainscreen={3} spaceBetween={30} />
        </div>
        <div className="flex-center w-full my-6">
          <Link href={"#"} >
            <Button variant="white" className="!w-48 shadow-xl px-6">
              View More
            </Button>
          </Link>
        </div>
      </div>

      {/* testimonial */}
      <div className="relative bg-zinc-200 p-3 pb-24  md:px-52">
        <div className="absolute bg-orange-500 h-80 w-[80vw]  top-[37%] left-[10vw] rounded-2xl"></div>
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          {testimonials?.title?.t1}
          <span className="text-orange-500">{testimonials?.title?.t2}</span>
        </h2>
        <TestimonialSlider data={testimonials?.testimonials} />
      </div>

      {/* News section */}
      <div className="p-3 pb-24  md:px-52 !relative">
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          We have been featured in the News!
        </h2>
        <NewsCardSlider data={newsPage?.news} />
        <div className="flex-center w-full my-6">
          <Link href={"#"} >
            <Button variant="white" className="!w-48 shadow-xl px-6">
              View More
            </Button>
          </Link>
        </div>
      </div>

      {/* explore college */}
      <div className="relative bg-zinc-200 p-3 py-24  md:px-32 lg:px-52 ">
        <div className="bg-orange-200  pb-16">
          <Link href={"#"} className="!w-60">
            <Button className="!w-60 shadow-xl bg-orange-600 text-white px-6 mb-5">
              Explore colleges
            </Button>
          </Link>
          <div className="md:px-20 px-4">
            <div>
              <Link
                href={"#"}
                className="block float-right text-orange-500 font-bold text-xl "
              >
                <p >See More</p>
              </Link>
            </div> <br className="my-4"/>
            <ExamFilteredCard exam ={exams?.[0]} tabsSections={tabsSections} />
          </div>
        </div>
      </div>

      {/* metric data */}
      <MetricsCard data = {homePageData?.metricData}/>

      {/* packages part */}
      <PackageCard data = {CounsellingPackages}/>

{/* faqs */}
<Faqs data={faqs}/>

{/* final creative section */}
{/* <LastSection/> */}
    </>
  );
}



function HomeBanner({ title, fullData }: any) {
  return (
    <Wrapper>
      <div className="absolute top-0 left-0 w-full h-full min-h-[140vh] bg-[radial-gradient(circle_at_center_40px,transparent,transparent,transparent,transparent,#AADBFF,#00BBFF,#873D7C,#FFA93C,#FF8900,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent)] bg-[position:50%] bg-[size:400%] bg-no-repeat opacity-60  max-sm:bg-[size:1000%] "></div>

      <div className="z-20 relative w-full h-full  flex-center flex-col p-24 max-sm:p-4">
        <div className="max-w-[740px] text-center">
          <h1 className="text-5xl font-bold mb-4 text-center max-sm:text-3xl max-sm:mb-2">
            {title.t1} <span className="text-orange-600">{title?.t2}</span>
          </h1>
          <p className="text-center text-xl">{title?.text}</p>
          {/* for input type */}
          {/* <Search /> */}

          <Wrapper
        as="div"
        bgColor="bg-transparent"
        containerClassName="px-10 py-10"
        className="!md:pr-2 text-primary-text focus-within:border-secondary-text flex h-12 items-center gap-4 rounded-xl bg-white py-2 !pr-2 shadow-md max-md:mt-5"
      >
        <input
          className="w-full pl-5 focus:outline-none max-md:p-3"
          type="text"
          placeholder="Search for colleges, courses etc."
         
          min={3}
        />
        <Button variant="black" className="text-sm" >
          Submit
        </Button>
      </Wrapper>

        </div>
        {/* cards */}
        <div className="flex gap-2 flex-wrap w-full mt-8 max-sm:mt-3 justify-center">
          <Section1Card data={fullData.text1} />
          <Section1Card data={fullData.text2} />
          <Section1Card data={fullData.text3} />
          <Section1Card data={fullData.text4} />
        </div>
        <div className="bg-black bg-opacity-70 px-6 py-10 text-white text-center max-w-[1000px] my-10 rounded-xl max-sm:my-5">
          {fullData.text5}
        </div>
        {/* slider part */}
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          Popular Courses
        </h2>
        <HomeSection1Slider data={courses?.[0]} />
      </div>
    </Wrapper>
  );
}

interface Section1CardProps {
  data: string;
}

function Section1Card({ data }: Section1CardProps) {
  return (
    <div className="w-full sm:w-[48%] lg:w-[23%] p-2 bg-white bg-opacity-30 rounded-xl">
      <div className="text-center px-3 py-8 bg-white h-full rounded-xl">
        <p className="text-orange-500 text-center">{data}</p>
      </div>
    </div>
  );
}
const HomeSection1Slider = ({ data }:any) => {
  const uniqueId = "popularCourses123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };


  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper !relative w-full max-w-fit px-5 ${uniqueId}`}
      >
        {["", "text-blue-800", "", "text-blue-800", "", "text-blue-800"].map(
          (className, idx) => (
            <SwiperSlide
              key={idx}
              className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
            >
              <CollegesCardContent text={data.breadCrumb} className={className} />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div
        className={`${uniqueId}-next !absolute !text-2xl bg-white !rounded-full !text-black !bottom-48 p-2 shadow-md !right-2 max-sm:hidden`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${uniqueId}-prev !absolute !text-2xl bg-white !text-black !rounded-full p-2 shadow-md !bottom-48 max-sm:hidden !left-2`}
      >
        <FaAngleLeft />
      </div>
    </>
  );
};

function CollegesCardContent({ text, className}:any){
  return <div className={`shadow px-3 py-16 text-center ${className}`}>{text}</div>;
};

// Events function

function Events({ data }: { data: any[] }) {
  return (
    <Wrapper>
      <div className="flex flex-wrap  justify-around">
        {data.map((event) => (
          <div
            key={event.id}
            className="border-white border-8 w-[35%] max-sm:w-full bg-white rounded-xl overflow-hidden max-sm:my-4"
          >
            {/* Event content here */}
            <Image src={event.image} alt={"event"} className="w-full h-auto" />
            <div className="p-4">
              <p className="mb-3 text-2xl">{event.text}</p>

              <Link href={event.href} className="max-md:w-full">
                <Button variant="black" className="!w-full">
                  Attend Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

// testimonials slider

const TestimonialSlider = ({ data }: any) => {
  const uniqueId = "testimonials123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper !relative w-full max-w-fit px-5`}
      >
        {data.map((comments: { id: React.Key | null | undefined }) => (
          <SwiperSlide
            key={comments.id}
            className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
          >
            <TestimonialCard testimonial={comments} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${uniqueId}-next !absolute !text-2xl bg-white !rounded-full !text-black !bottom-48 p-2 shadow-md !right-2 max-sm:hidden`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${uniqueId}-prev !absolute !text-2xl bg-white !text-black !rounded-full p-2 shadow-md !bottom-48 max-sm:hidden !left-2`}
      >
        <FaAngleLeft />
      </div>
    </>
  );
};

function TestimonialCard({ testimonial }: any) {
  return (
    <div className="w-full p-4">
      <div className="flex items-center">
        <Image
          src={testimonial?.userAvatar}
          alt="profile"
          className="h-14 w-14 rounded-full"
        />
        <div className="p-3 ml-5">
          <h3>{testimonial?.userName}</h3>
          <p>{testimonial?.college}</p>
        </div>
      </div>
      <p className="my-2">{testimonial?.comment}</p>
      <div className="flex-center mb-3">
        {Array.from({ length: testimonial?.star }, (_, i) => (
          <FaStar key={i} className="text-2xl text-orange-500 mx-2" />
        ))}
      </div>
      <Link href={testimonial?.storyVideoLink} className="my-2">
        <Button variant="black" className="!w-full">
          View Story
        </Button>
      </Link>
    </div>
  );
}

// News Slider
const NewsCardSlider = ({ data }: any) => {
  const uniqueId = "news123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper !relative w-full max-w-fit px-5`}
      >
        {data.map((news: { id: React.Key | null | undefined }) => (
          <SwiperSlide
            key={news.id}
            className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
          >
            <NewsCard newspart={news} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${uniqueId}-next !absolute !text-2xl bg-white !rounded-full !text-black !bottom-48 p-2 shadow-md !right-2 max-sm:hidden`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${uniqueId}-prev !absolute !text-2xl bg-white !text-black !rounded-full p-2 shadow-md !bottom-48 max-sm:hidden !left-2`}
      >
        <FaAngleLeft />
      </div>
    </>
  );
};

function NewsCard({ newspart }: any) {
  return (
    <div className="w-full p-4">
      <Image
        src={newspart?.icon?.url}
        alt="profile"
        className="w-full rounded-xl"
      />
      <div className="px-4">
        <p className="my-2">{newspart?.text}</p>
        <p className="text-md text-zinc-700">{newspart?.timeStamp}</p>
      </div>
    </div>
  );
}

// metric data
function MetricsCard({ data }: any) {
  return (
    <div className="w-full flex-center p-4 pb-14">
      <div className="max-w-[750px] w-full">
      <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
      {data?.title}
        </h2>
        <p className="text-center text-xl mb-11"> {data?.text}</p>
        <div className="flex flex-wrap gap-3 justify-center items-stretch">
          <div className="py-8 px-6 border-b-2 border-orange-500 w-[48%] lg:w-[23%] bg-white shadow-xl">
            <h3 className="font-bold text-2xl">{data?.students}+</h3>
            <p>Students</p>
          </div>
          <div className="py-8 px-6 border-b-2 border-orange-500 w-[48%] lg:w-[23%] bg-white shadow-xl">
            <h3 className="font-bold text-2xl">{data?.experts}+</h3>
            <p>Unbiased Experts</p>
          </div><div className="py-8 px-6 border-b-2 border-orange-500 w-[48%] lg:w-[23%] bg-white shadow-xl">
            <h3 className="font-bold text-2xl">{data?.newUsers}+</h3>
            <p>New users joined Anima</p>
          </div><div className="py-8 px-6 border-b-2 border-orange-500 w-[48%] lg:w-[23%] bg-white shadow-xl">
            <h3 className="font-bold text-2xl">{data?.teams}+</h3>
            <p>Teams used Anima</p>
          </div>
        </div>
        </div>
    </div>
  );
}

// package card
function PackageCard({ data }:any) {
  return (
    <div className="w-full p-4 pb-14 bg-zinc-200">
      <div className="w-full">
        <h2 className="text-center text-4xl max-sm:my-9 sm:text-5xl my-14 font-bold">
          {data?.title}
        </h2>
        <p className="text-center text-xl mb-11">{data?.text}</p>
        <div className="flex flex-wrap gap-4 justify-center items-stretch">
          {data?.counsellingPackagesCards?.map((packageData: { id: any; }) => (
            <PackageContentCard key={packageData.id} data={packageData} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PackageContentCard({ data }:any) {
  return (
    <div className={`w-full sm:w-[27%] md:pb-20 pt-6 rounded-xl shadow relative p-5 ${data?.isPopular ? 'text-white bg-orange-500' : 'text-black bg-white'}`}>
      <p className="mb-2">{data?.PackageName}</p>
      <h3 className="text-4xl font-bold">{data?.price} <span className="text-xl">/month</span></h3>
      <p className="my-2" >{data?.text}</p>
      {data?.lists?.map((list: any) => (
        <p key={list.id} className="flex items-center font-bold">
          {list?.isInclude ? <FaCheck className="mr-3" /> : <ImCross className="mr-3" />} {list?.text}
        </p>
      ))}
      <Link href="#" className="block my-2 md:absolute bottom-2 lg:!w-[91%] md:!w-[87%] w-full mt-2">
        <Button variant="black" className="!w-full">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
function LastSection(){
  return(
    <Wrapper className="!relative">
    {/* <div className="absolute top-0 left-0 w-full h-full min-h-[100vh] bg-gradient-to-b from-[#FF8900] via-[#FFA93C] via-[#873D7C] via-[#00BBFF] to-[#AADBFF] opacity-60 max-sm:bg-[length:100%_100%]"></div> */}
    
    <div className="z-20 relative w-full h-full flex items-center justify-center flex-col p-24 max-sm:p-4">
      <div className="max-w-[740px] text-center">
        <h1 className="text-5xl font-bold mb-4 text-center max-sm:text-3xl max-sm:mb-2">
          More than 1000+ Colleges
        </h1>
        <p className="text-center text-xl">Start your college Discovery...</p>
        {/* for input type */}
        {/* <Search /> */}
      </div>
      {/* cards */}
    </div>
  </Wrapper>
  )
}
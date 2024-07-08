import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";
import { RiTodoLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { formatDate } from "@/utils/customText";

export default function ExamFilteredCard({ exam, tabsSections }:any) {
  return (
    <div className="relative mb-5 w-full rounded-lg bg-white shadow-lg">
      <div className="flex gap-y-2 p-5 max-lg:flex-wrap">
        <Image
          src={exam?.logo?.url}
          alt={`${exam.examName} banner`}
          width={220}
          height={175}
          className="h-[175px] w-[220px] rounded-md object-contain max-lg:w-full"
        />
        <div className="md:px-5">
          <Link href={`/exams/${exam.slug || ""}`}>
            <h1 className="mb-3 cursor-pointer text-wrap text-xl font-bold hover:text-orange-500">
              {exam.examName}
            </h1>
          </Link>
          <div className="mb-3 flex flex-wrap gap-x-6">
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-2xl text-orange-500" />
                <div>
                  <p className="font-medium">
                    Registration Date:{" "}
                    <span className="text-zinc-600">
                      {formatDate(exam?.applicationSubmissionDates?.startDate)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-2xl text-orange-500" />
                <div>
                  <p className="font-medium">
                    Exam Date:{" "}
                    <span className="text-zinc-600">
                      {formatDate(exam?.applicationSubmissionDates?.endDate)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-wrap gap-x-6">
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-2xl text-blue-500" />
                <div>
                  <p className="font-medium text-zinc-600">{exam?.mode}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <FaBook className="text-2xl text-blue-500" />
                <p className="font-medium text-zinc-600">
                  {exam?.ExaminationLevel}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 text-zinc-600">
            <p className="line-clamp-2 text-wrap text-sm [flex:11]">
              <span className="line-clamp-2 text-justify">
                {exam?.description}
              </span>
              <span className="text-orange-500 hover:underline">
                <Link href={`/exams/${exam.slug || "#"}`}>Read More</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-2 border-t border-zinc-600 p-5">
        <ul className="flex flex-wrap items-center gap-x-4 rounded-md bg-orange-100 px-4 py-1 text-sm text-orange-600">
          {tabsSections.map((item:any, index:number) => (
            <React.Fragment key={index}>
              <Link href="#">
                <li className="cursor-pointer capitalize hover:underline">
                  {item.navItem}
                </li>
              </Link>
              {index !== exam.category.length - 1 && index < 4 && <li>|</li>}
            </React.Fragment>
          ))}
        </ul>
        <div className="flex gap-2 max-md:w-full max-md:flex-col">
          <Link href="#" className="max-md:w-full">
            <Button variant="black" className="!w-full">
              Apply Now
            </Button>
          </Link>
          <Link href={exam.brochureUrl || "#"} className="max-md:w-full">
            <Button variant="orange" className="!w-full">
              Download Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

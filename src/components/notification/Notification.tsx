import Link from "next/link";
import React from "react";
import Wrapper from "../Wrappers";

export default function Notification({ data }: any) {
  return (
    <Wrapper as="section"
      bgColor="bg-transparent"
      containerClassName="px-10"
      className="rounded-xl bg-[#b3aeaa] p-5 text-white text-center leading-loose"
    >
      <h2>Notification</h2>
      <ul>
        {data?.map((data: any) => (
          <li key={data?.id} className="w-full flex justify-center">
            <Link
              href={data?.href || "#"}
              target="_blank"
              className="flex justify-center capitalize underline w-max"
            >
              <span className="text-orange-500 underline">{data?.date}:</span>
              <span className="underline hover:text-blue-100">
                {data?.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

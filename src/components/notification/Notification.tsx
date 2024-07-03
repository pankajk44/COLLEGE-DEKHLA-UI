import Link from "next/link";
import React from "react";
import Wrapper from "../Wrappers";

export default function Notification({ data }: any) {
  return (
    <Wrapper as="section"
      bgColor="bg-transparent"
      containerClassName="px-10"
      className="rounded-xl redOrangeGradient p-5 text-white text-center leading-loose max-w-screen-lg"
    >
      <h2 className="text-blue-900 font-semibold text-lg uppercase">Notification:</h2>
      <ul>
        {data?.map((data: any) => (
          <li key={data?.id} className="w-full flex justify-center">
            <Link
              href={data?.href || "#"}
              target="_blank"
              className="flex justify-center gap-1 capitalize underline w-max"
            >
              <span className="text-blue-900 font-semibold underline">{data?.date}:</span>
              <span className="underline hover:text-blue-500">
                {data?.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

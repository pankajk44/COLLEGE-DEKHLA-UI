import React from "react";
import Wrapper from "../Wrappers";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import { Button } from "../Button";
import { FaDownload } from "react-icons/fa";

export default function CollegePredictor() {
  return (
    <Wrapper
      as="section"
      containerClassName="px-5"
      className="max-w-screen-lg rounded-lg bg-orange-200 p-5 flex flex-col gap-3 items-center text-center text-zinc-800"
    >
      <h1 className="text-lg font-bold">JEE Main College Predictor</h1>
      <p>
        <TextWithLineBreak
          text={
            "Predict your top engineering college admission chances based on your JEE Main All \\nIndia Rank & NTA Score."
          }
        />
      </p>
      <Button className="text-nowrap"> <FaDownload className="text-lg" /> Use Now </Button>
    </Wrapper>
  );
}

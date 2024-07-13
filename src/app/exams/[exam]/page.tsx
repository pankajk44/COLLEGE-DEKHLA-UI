"use client";
import Banner1 from "@/components/bannerSections/Banner1";
import ExamDetailBanner from "@/components/bannerSections/ExamDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { exams } from "@/data/examData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";
import { getExamDetails } from "@/graphql/examQuery/examDetails";
import { convertQueryDataToTabSections } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

type Props = {
  params: {
    exam: String;
  };
};

export default function ExamDetailsPage({ params }: Props) {
  const [tabSelectionArray, setTabSelectionArray] = React.useState<any>([]);
  const examId = params?.exam;
  // Query
  const {
    loading,
    error,
    data: examData,
  } = useQuery(getExamDetails, {
    variables: { ID: examId },
  });

  useEffect(() => {
    // console.log("Exam Details: ", examData);

    if (examData?.exam?.data?.attributes?.PageData) {
      const convertedData: any = convertQueryDataToTabSections(
        examData?.exam?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [examData]);

  // console.log("tabSelectionArray", tabSelectionArray);

  return (
    <>
      <ExamDetailBanner
        breadCrumb={exams?.[0]?.breadCrumb}
        examName={exams?.[0]?.examName}
        titleAddition={exams?.[0]?.titleAddition}
        examLogo={exams?.[0]?.logo?.url}
        brochureUrl={exams?.[0]?.brochureUrl}
        lastUpdate={exams?.[0]?.lastUpdate}
      />
      <PageTabsWithDetail
        data={tabSelectionArray}
        asideData={asideSection}
        slug={examId}
      />
      <Banner1 data={banner1} />
    </>
  );
}

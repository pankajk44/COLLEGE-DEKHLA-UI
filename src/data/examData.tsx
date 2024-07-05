import {
  exam1,
  examBg1,
  examBg2,
  examBg3,
  examBg4,
  examPaper,
  user1,
} from "@/assets";

export const examsListingPage = {
  banner: {
    bgImg: [
      { url: examBg4 },
      { url: examBg1 },
      { url: examBg2 },
      { url: examBg4 },
    ],
  },
  filterBy: {
    stream: [
      "engineering",
      "commerce & banking",
      "medical",
      "hotel management",
      "information technology",
      "art & humanities",
    ],
    mode: ["online", "offline", "both"],
    eligibilityLevel: [
      "B.Sc",
      "BA",
      "B.Com",
      "B.Tech",
      "Polytechnic",
      "M.Sc",
      "PhD",
      "BCA",
    ],
    category: [
      "JEE MAIN",
      "NEET",
      "CAT",
      "GATE",
      "CLAT",
      "JEE ADVANCED",
      "KCET",
      "GRE",
      "TOEFL",
      "IELTS",
      "GMAT",
    ],
    ExaminationLevel: ["National", "State", "International", "NRI", "Other"],
    examStatus: ["Upcoming exams", "Ongoing", "Closed"],
  },
};

export const exams = [
  {
    id: 1,
    slug: "/jee-advanced-2024",
    logo: exam1,
    bg: examBg1,
    breadCrumb: "JEE ADVANCED 2024",
    examName: "Joint Entrance Exam Advanced (JEE Advanced)2024",
    description:
      "Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its academic excellence and innovative research programs. With a diverse student body and a wide range. Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its",
    titleAddition:
      "Exam Dates, Application Form, Syllabus, Exam Pattern, Eligibility, Registration (Apr 21)",
    studentsParticipation: "63,73,884",
    stream: "Engineering",
    eligibilityLevel: ["B.Sc", "Polytechnic"],
    mode: "Online",
    category: ["JEE MAIN", "JEE ADVANCED"],
    examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
    applicationSubmissionDates: {
      startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
      endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
    },
    resultAnnounceDate:
      "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
    lastUpdate: "Nov 17, 2023 14:25 IST",
    examStatus: "Upcoming",
    ExaminationLevel: "National",
    brochureUrl: "#",
    // same as college  faqs
    faqs: [],
    new: [],
    // same as college  tabsSections
    tabsSections: [],
    examSequence:1,
  },
]
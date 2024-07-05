import {
  c1,
  c3,
  collegeBanner,
  collegeBanner1,
  collegeBanner2,
  collegeBanner3,
  collegeLogo,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  user1,
} from "@/assets";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTransgenderAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdCastForEducation } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export const collegePage = {
  banner: {
    bgImg: [
      { url: collegeBanner },
      { url: collegeBanner1 },
      { url: collegeBanner2 },
      { url: collegeBanner3 },
    ],
  },
  filterBy: {
    stream: [
      "Engineering",
      "Business",
      "Arts",
      "Science",
      "Commerce",
      "Management",
      "Law",
      "Medical",
    ],
    state: [
      "Tamil Nadu",
      "Karnataka",
      "Kerala",
      "Andhra Pradesh",
      "Telangana",
      "Maharashtra",
      "Gujarat",
      "Rajasthan",
    ],
    city: ["faridabad", "bhiwani", "Hisar", "delhi", "sirsa"],
    course: [
      "Computer Science",
      "Electronics",
      "Mechanical",
      "Civil",
      "Chemical",
      "Chemistry",
      "Architecture",
      "Biotechnology",
      "Agriculture",
    ],
    rating: ["5", "4-5", "3-4", "2-3", "<2"],
    courseDuration: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    collegeCategory: [
      "State University",
      "Private University",
      "Semi-Private University",
      "Foriegn University",
    ],
    programType: ["Full-Time", "Part-Time", "Distance", "Online", "Hybrid"],
    collegeType: ["Government", "Private", "Semi-Private", "Foriegn"],
    affiliation: [
      "AICTE",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
    ],
    gender: ["Co-ed", "Boys", "Girls"],
    ranking: [
      "Top 10",
      "Top 20",
      "Top 30",
      "Top 40",
      "Top 50",
      "Top 60",
      "Top 70",
      "Top 80",
      "Top 90",
      "Top 100",
    ],
    exam: ["JEE Adv", "JEE Main", "CAT", "CET", "SDR", "DRY", "DRB", "GATE"],
    avgFeePerYear: [
      "1-3",
      "3-5",
      "5-8",
      "8-10",
      "10-12",
      "12-15",
      "15-20",
      "20-25",
    ],
  },
};

// Single college Details
export const colleges = [
  {
    id: "1",
    slug: "iit-kharagpur",
    breadCrumb: "IIT kharagpur",
    collegeLogo: { url: collegeLogo },
    bgImage: { url: c1 },
    collegeName: "IIT kharagpur - Indian Institute of Technology ",
    description:
      "Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its academic excellence and innovative research programs. With a diverse student body and a wide range. Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its",
    location: {
      state: "Chennai",
      city: "Los Angeles",
      country: "USA",
    },
    collegeType: "Government",
    affiliation: ["AICTE", "WSCUC"],
    estYear: "1990",
    exam: ["SAT", "ACT"],
    //  See Below for tabsSections
    tabsSections: [],
    // See In CoursesData page
    courses: [],
    videoGallery: [
      { id: 1, title: "Video 1", videoId: "4-YEBaUXUGo" },
      { id: 2, title: "Video 2", videoId: "4-YEBaUXUGo" },
      { id: 3, title: "Video 3", videoId: "4-YEBaUXUGo" },
    ],
    imageGallery: [
      { id: 1, url: c1, category: "hostel" },
      { id: 2, url: c1, category: "library" },
      { id: 3, url: c1, category: "buildings" },
    ],
    // See Below for faqs
    faqs: [],
    reviewsAndRatings: {
      totalReviews: "7",
      overallRating: "4.5",
      individualReviews: [
        {
          title: "College Infrastructure",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Academics & Faculty",
          icon: <BiSolidInstitution />,
          rating: "3",
          basedOn: "456",
        },
        {
          title: "Facilities",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Placements & Internships",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Fees & Scholarships",
          icon: <RiMoneyRupeeCircleFill />,
          rating: "3",
          basedOn: "456",
        },
        {
          title: "Crowd & Campus Life",
          icon: <FaTransgenderAlt />,
          rating: "2",
          basedOn: "456",
        },
        {
          title: "Overall Experience",
          icon: <MdCastForEducation />,
          rating: "4.5",
          basedOn: "456",
        },
      ],
    },
    campusSize: "617 Acres",
    noOfFaculty: "592",
    noOfStudents: "10224",
    avgFeePerYear: 220000,
    avgFeePerSem: 20000,
    avgPackage: 19800000,
    hightestPackage: 19800000,
    genderAccepted: "Co-ed",
    studyMode: "Regular, Part-time",
    collegeSequence: 1,
    isTopCollege: true,
    topCollegeSequence: 2,
    lastUpdate: "Nov 17, 2023 14:25 IST",
    // See newData for News
    news: [],
    brochureUrl:"#",
    collegeCategory: "State",
  },
];

export const faqs = [
  {
    id: 1,
    question: "When was the University Established?",
    answer:
      "The Indian Institute of Technology, Madras was established in 1961. The institute was founded by the erstwhile Prime Minister, Shri. Venkatesh Iyengar.",
  },
  {
    id: 2,
    question: "Is the University a Private or Government University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 3,
    question: "What is the University Affiliation?",
    answer:
      "The Indian Institute of Technology, Madras is affiliated to the University of Madras. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 4,
    question: "How good is the University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 5,
    question: "What courses does the University Offer?",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
];

export const tabsSections = [
  {
    navItem: "overview",
    sections: [
      {
        id: 1,
        title: "About IIT Madras",
        author: {
          avatar: { url: user1 },
          name: "Pankaj Kumar",
          lastUpdated: "MAR 21, 2024 18:39 IST",
        },
        article:
          "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
        button: {
          button1: { text: "Apply Now", link: "#" },
          button2: { text: "Download Brochure", link: "#" },
        },
        importantLinks: {
          title: "This Story also Contains",
          links:[
            {
              id: 1,
              title: "Important Links",
              href: "#",
            },
            {
              id: 2,
              title: "Important Links",
              href: "#",
            },
            {
              id: 2,
              title: "Important Links",
              href: "#",
            },
          ]
        },
        banner: {
          img: { url: c3 },
          text: "JEE Main 2024: Paper 2 Result (Out), Cut Off, Toppers List, Counselling Dates",
          href: "#",
        },
        table: `
            <table border="1">
      <tr>
        <th>Exams and Events</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Last Date to Apply for the Scholarship</td>
        <td>January 2, 2025</td>
      </tr>
      <tr>
        <td>Interview Dates</td>
        <td>Between April and June</td>
      </tr>
      <tr>
        <td>Declaration of Selection Results</td>
        <td>June</td>
      </tr>
      <tr>
        <td>Commencement of the Doctoral Programme</td>
        <td>In the month of September/October</td>
      </tr>
    </table>
            `,
        article1:
          "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
        topRecruitersLogos: [
          { url: comp1 },
          { url: comp2 },
          { url: comp3 },
          { url: comp4 },
          { url: comp5 },
        ],
      },
    ],
  },
  {
    navItem: "sample papers",
    sections: [],
  },
  {
    navItem: "cutoff",
  },
  {
    navItem: "application",
    sections: [],
  },
  {
    navItem: "results",
  },
  {
    navItem: "Exam Pattern",
  },
  {
    navItem: "Preparation Tips",
  },
];

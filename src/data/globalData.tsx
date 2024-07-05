import { c3, comp1, comp2, comp3, comp4, comp5, mobileBanner, user1 } from "@/assets";

export const banner1 = {
  title: "Get admissions in \\nyour desired College \\nToday!",
  text: "Discover the variety of courses, exams and Top \\nUniversity in a single place",
  button: {
    text: "Get Started",
    href: "/college",
  },
  bg: { url: mobileBanner },
};

export const collegePredictor = {
  title: "JEE Main College Predictor",
  text: "Predict your top engineering college admission chances based on your JEE Main All \\nIndia Rank & NTA Score.",
  button: {
    text: "Get Started",
    href: "/college",
  },
};

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
          links: [
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
          ],
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
        accordion: [
          {
            id: 1,
            title: "Semester 1",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 2,
            title: "Semester 2",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 3,
            title: "Semester 3",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 4,
            title: "Semester 4",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 5,
            title: "Semester 5",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 6,
            title: "Semester 6",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 7,
            title: "Semester 7",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 8,
            title: "Semester 8",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
        ],
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
import {
  c3,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  mobileBanner,
  user1,
} from "@/assets";

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
        quote: `<p>NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website.</p>`,
        article: `
          <p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>
          <p class='note my-5'>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>
          <p class='my-5'><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>
            <div class="bg-orange my-5">
            <h6 class="text-xl">This Story also Contains</h6>
            <ul class='list'>
            <li>Important Dates</li>
            <li>Important Dates</li>
            <li>Important Dates</li>
            <li>Important Dates</li>
            </ul>
            </div>
          `,
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
              text: "https://nta.ac.in/",
              href: "#",
            },
            {
              id: 2,
              title: "Important Links",
              text: "https://nta.ac.in/",
              href: "#",
            },
            {
              id: 2,
              title: "Important Links",
              text: "https://nta.ac.in/",
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

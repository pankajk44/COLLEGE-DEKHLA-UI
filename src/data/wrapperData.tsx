import { footerLogo, headerLogo } from "@/assets";

export const header = {
  logo: headerLogo,
  href: "/",

  navItems: [
    {
      id: 1,
      label: "Explore colleges",
      href: "/colleges",
      subNav: [
        // {
        //   id: 21,
        //   label: "courses1",
        //   href: "#",
        // },
      ],
    },
    {
      id: 2,
      label: "Exams",
      href: "/exams",
      subNav: [],
    },
    {
      id: 3,
      label: "Programs",
      href: "/programs",
      subNav: [],
    },

    {
      id: 4,
      label: "Latest News",
      href: "/news",
      subNav: [],
    },
    {
      id: 5,
      label: "More",
      href: "/more",
      subNav: [],
    },
  ],
};
export const footer = {
  logo: footerLogo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \\n sed do eiusmod tempor incididunt",
  contactDetails: {
    contactNo: "+1 (999) 888-77-66",
    email: "info@collegedakhla.com",
    location:
      "#1701, B Tower, World \\nTrade Tower, Sector - 16, \\nNoida, U.P - 201301",
  },
  socials: {
    facebook: "https://www.facebook.com/collegedakhla",
    twitter: "https://twitter.com/collegedakhla",
    instagram: "https://www.instagram.com/collegedakhla/",
    linkedin: "https://www.linkedin.com/school/collegedakhla/",
    youtube: "https://www.youtube.com/c/collegedakhla",
  },
  copyrightText: "Copyrights © 2024 collegedakhla. All rights reserved.",
  list1: {
    title: "Quick Links",
    links: [
      {
        id: 1,
        label: "Home",
        href: "/",
      },
      {
        id: 2,
        label: "About",
        href: "/about",
      },
      {
        id: 3,
        label: "Contact Us",
        href: "/contact-us",
      },
      {
        id: 4,
        label: "Work with Us",
        href: "/work-with-us",
      },
      {
        id: 5,
        label: "Testimonials",
        href: "/testimonials",
      },
      {
        id: 6,
        label: "Blogs",
        href: "/blogs",
      },
      {
        id: 7,
        label: "News",
        href: "/news",
      },
    ],
  },
  list2: {
    title: "Useful Links",
    links: [
      {
        id: 1,
        label: "Education Loan",
        href: "/education-loan",
      },
      {
        id: 2,
        label: "Courses",
        href: "/courses",
      },
      {
        id: 3,
        label: "MBBS India",
        href: "/mbbs-india",
      },
      {
        id: 4,
        label: "MBBS Abroad",
        href: "/mbbs-abroad",
      },
      {
        id: 5,
        label: "Top Para Medical Colleges",
        href: "/top-para-medical-colleges",
      },
      {
        id: 6,
        label: "Top MBA Colleges",
        href: "/top-mba-colleges",
      },
      {
        id: 7,
        label: "B.Tech",
        href: "/b-tech",
      },
      {
        id: 8,
        label: "Explore Exams",
        href: "/explore-exams",
      },
    ],
  },
  list3: {
    title: "Pages",
    links: [
      {
        id: 1,
        label: "Application Form",
        href: "/application-form",
      },
      {
        id: 2,
        label: "Counselling Packages",
        href: "/counselling-packages",
      },
      {
        id: 3,
        label: "Study Abroad",
        href: "/study-abroad",
      },
      {
        id: 4,
        label: "Latest Updates",
        href: "/latest-updates",
      },
    ],
  },
  newLetter:{
    title: "Subscribe to our newsletter",
    description: "Subscribe to our newsletter to get latest news and updates.",
  }
};

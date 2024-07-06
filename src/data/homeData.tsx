import { collegeBanner1, collegeLogo } from "@/assets";

export const homePageData = {
  HeroSection: {
    title: {
      t1: "Colleges designed to meet your specific needs and",
      t2: "aspirations",
      t3: "",
    },
    text: "Find your favorite course and study anywhere, anytime with the best mentor",
  },
  text1: "25000+ Colleges",
  text2: "1000+ Courses",
  text3: "100+ Exams",
  text4: "10000+ Reviews",
  text5: "We are here as a solution to improve people's competence in getting jobs, increasing income, and starting a professional business with quality learning at affordable prices.",
  metricData:{
    students:50000,
    experts:40,
    newUsers:100000,
    teams:700000000,
  },
  eventsAndWebinars:[
    {
        id:1,
        image:collegeBanner1,
        text:"Career counselling tips for student to achieve the best course and colleges for students",
        href:"#"
    },
    {
        id:2,
        image:collegeBanner1,
        text:"Career counselling tips for student to achieve the best course and colleges for students",
        href:"#"   
    }
  ],
  // add 15 logos
  collegeLogos:[
    {
        id:1,
        image:{url:collegeLogo},
        href:"#"
    },
    {
        id:2,
        image:{url:collegeLogo},
        href:"#"
    },
    {
        id:3,
        image:{url:collegeLogo},
        href:"#"
    },
  ]
};

// popular courses according to popularSequence
// Top colleges according to topCollegeSequence
// Testimonals
// News  according to newsSequence
// top Colleges according to featuredSequence
// CounsellingPackages
// FAQs

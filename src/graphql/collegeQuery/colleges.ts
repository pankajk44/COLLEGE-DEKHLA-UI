import { gql } from "@apollo/client";

function ratingFilter(range: any) {
  switch (range) {
    case "5":
      return `eq: 5`;
    case "4-5":
      return `gte: 4, lt: 5`;
    case "3-4":
      return `gte: 3, lt: 4`;
    case "2-3":
      return `gte: 2, lt: 3`;
    case "<2":
      return `lt: 2`;
    default:
      return ``;
  }
}

function avgFeePerYearFilter(range: any) {
  switch (range) {
    case "100000-300000":
      return `gte: 100000, lt: 300000`;
    case "300000-500000":
      return `gte: 300000, lt: 500000`;
    case "500000-800000":
      return `gte: 500000, lt: 800000`;
    case "800000-1000000":
      return `gte: 800000, lt: 1000000`;
    case "1000000-1200000":
      return `gte: 1000000, lt: 1200000`;
    case "1200000-1500000":
      return `gte: 1200000, lt: 1500000`;
    case "1500000-2000000":
      return `gte: 1500000, lt: 2000000`;
    case "2000000-2500000":
      return `gte: 2000000, lt: 2500000`;
    default:
      return ``;
  }
}

export function getAllColleges(rating: any, avgFeePerYear: any, ranking: any) {
  const ratingFilterStr = ratingFilter(rating);
  const avgFeePerYearFilterStr = avgFeePerYearFilter(avgFeePerYear);
  return gql`
    query getAllColleges(
      $start: Int!
      $limit: Int!
      $city: String
      $state: String
      $collegeType: String
      $affiliation: String
      $gender: String
      $examName: String
      $course: String
      $specialization: String
)  {
      colleges(
        pagination: { start: $start, limit: $limit }
        sort: "collegeSequence:asc"
        filters: {
          college_type: { collegeType: { eq: $collegeType } }
          location: {
            city: { city: { eq: $city } }
            state: { state: { eq: $state } }
          }
          affiliation: { organization: { eq: $affiliation } }
          genderAccepted: { gender: { eq: $gender } }
          courses: {
            examName: { examName: { eq: $examName } }
            courseName: { courseName: { eq: $course } }
            specialization: { specialization:{eq: $specialization}}
          }
          
        }
      ) {
        data {
          id
          attributes {
            slug
            breadCrumb
            bgImage {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            collegeName
            description
            location {
              state {
                data {
                  id
                  attributes {
                    state
                  }
                }
              }
              city {
                data {
                  id
                  attributes {
                    city
                  }
                }
              }
              country {
                data {
                  id
                  attributes {
                    country
                  }
                }
              }
            }
            college_type {
              data {
                id
                attributes {
                  collegeType
                }
              }
            }

             affiliation{
              data {
                id
                attributes {
                  organization
                }
              }
            }
            avgPackage
            hightestPackage
            brochureFile {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  ext
                  mime
                  size
                  url
                }
              }
            }
            navbars {
              data {
                id
                attributes {
                  navItem
                }
              }
            }
            CollegeReviewsAndRatings {
              id
              Academics {
                rating
              }
              Faculty {
                rating
              }
              Infrastructure {
                rating
              }
              SocialLife {
                rating
              }
              Placement {
                rating
              }
            }
            courses {
              courseFee
              courseFeeLabel
              examName {
                data {
                  id
                  attributes {
                    examName
                  }
                }
              }
            }

            isFeatured
            featuredSequence
            collegeSequence
            isTopCollege
            topCollegeSequence
          }
        }
      }
    }
  `;
}

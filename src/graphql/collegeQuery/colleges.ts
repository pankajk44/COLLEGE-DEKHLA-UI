import { gql } from "@apollo/client";

function ratingFilter(range:any) {
  switch(range) {
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

export function getAllColleges(rating:any) {
  const ratingFilterStr = ratingFilter(rating);
  return gql`
    query Colleges(
      $start: Int!
      $limit: Int!
      $city: String
      $state: String
      $collegeType: String
      $affiliation: String
      $gender: String
      $exams: String
      $programType: String
    ) {
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
          exams: { examName: { eq: $exams } }
          studyMode: { studyMode: { eq: $programType } }
          reviewsAndRatings: {
            overallRating: {
              ${ratingFilterStr}
            }
          }
        }
      ) {
        data {
          id
          attributes {
            slug
            breadCrumb
            collegeLogo {
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
            affiliation {
              data {
                id
                attributes {
                  organization
                }
              }
            }
            estYear
            exams {
              data {
                id
                attributes {
                  examName
                }
              }
            }
            tabsSections {
              id
              navItem
            }
            avgFeePerYear
            avgFeePerSem
            avgPackage
            hightestPackage
            reviewsAndRatings {
              totalReviews
              overallRating
            }
            collegeSequence
            isTopCollege
            topCollegeSequence
          }
        }
      }
    }
  `;
}

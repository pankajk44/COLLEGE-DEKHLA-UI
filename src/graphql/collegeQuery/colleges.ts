import { gql } from "@apollo/client";

export const getAllColleges = gql`
  query Colleges(
  $start: Int!,
  $limit: Int!,
  $city: String,
  $state: String
) {
  colleges(
    pagination: { start: $start, limit: $limit }
    sort: "collegeSequence:asc"
    filters: {
      
      location: {
        city: { city: { eq: $city } },
        state: { state: { eq: $state } }
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

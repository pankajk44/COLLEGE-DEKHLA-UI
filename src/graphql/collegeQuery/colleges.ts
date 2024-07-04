import { gql } from "@apollo/client";

export const getAllColleges = gql`
  query {
    colleges {
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
                  state_name
                }
              }
            }
            city {
              data {
                id
                attributes {
                  city_name
                }
              }
            }
            country {
              data {
                id
                attributes {
                  country_name
                }
              }
            }
          }
          college_type {
            data {
              id
              attributes {
                type_name
              }
            }
          }
          affiliation {
            data {
              id
              attributes {
                organization_name
              }
            }
          }
          estYear
          exams {
            data {
              id
              attributes {
                exam_name
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

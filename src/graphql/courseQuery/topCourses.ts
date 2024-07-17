import { gql } from "@apollo/client";

export const getAllTopCourses = gql`
  query getAllTopCourses {
    courses(filters: { isPopular: { eq: true } }, sort: "popularSequence:asc") {
      data {
        id
        attributes {
          slug
          courseName
          isPopular
          bgImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          courseType {
            data {
              id
              attributes {
                collegeType
              }
            }
          }
          description
          duration {
            data {
              id
              attributes {
                duration
              }
            }
          }
          avgFees {
            from
            to
          }
          courseLevel {
            data {
              id
              attributes {
                courseLevel
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
        }
      }
    }
  }
`;

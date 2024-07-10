import { gql } from "@apollo/client";

export const getAllCourses = gql`
  query {
  courses {
    data {
      id
      attributes {
        slug
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

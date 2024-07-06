import { gql } from "@apollo/client";

export const getAllCourses = gql`
  query {
    courses {
      data {
        id
        attributes {
          slug
          breadCrumb
          courseName
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
          ExaminationLevel {
            data {
              id
              attributes {
                ExaminationLevel
              }
            }
          }
          courseMode {
            data {
              id
              attributes {
                courseMode
              }
            }
          }
          tabsSections {
            navItem
          }
        }
      }
    }
  }
`;

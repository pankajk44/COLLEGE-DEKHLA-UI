import { gql } from "@apollo/client";

export const getAllCourses = gql`
  query getAllCourses(
    $sortingParameter: [String]
    $mode: String
    $duration: Long
    $searchByCourseName: String
    $page: Int
    $pageSize: Int
  ) {
    courses(
      sort: $sortingParameter
      filters: {
        courseName: { containsi: $searchByCourseName }
        courseMode: { courseMode: { eq: $mode } }
        duration: { duration: { eq: $duration } }
      }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          slug
          courseName
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

export const getAllModes = gql`
  query getAllModes {
    courseModes {
      data {
        id
        attributes {
          courseMode
        }
      }
    }
  }
`;

export const getAllDurations = gql`
  query getAllDurations {
    durations {
      data {
        id
        attributes {
          duration
        }
      }
    }
  }
`;

export const getAllSortingParameters = gql`
  query getAllSortingParameters {
    courses {
      data {
        attributes {
          courseSequence
          breadCrumb
          popularSequence
        }
      }
    }
  }
`;

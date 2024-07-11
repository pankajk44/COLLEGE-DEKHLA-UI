import { gql } from "@apollo/client";

export const getAllCourses = gql`
  query getAllCourses(
    $mode: String
    $duration: Long
    $searchByCourseName: String
  ) {
    courses(
      sort: "breadCrumb"
      filters: {
        courseName: { containsi: $searchByCourseName }
        courseMode: { courseMode: { eq: $mode } }
        duration: { duration: { eq: $duration } }
      }
    ) {
      data {
        id
        attributes {
          slug
          courseName
          courseSequence
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

import { gql } from "@apollo/client";

export const getAllExams = gql`
  query getAllExams(
  $mode: String
  $eligibilityLevel: String
  $ExaminationLevel: String
  $specialization: String
) {
  exams(
    filters: {
      specialization: { specialization:{ eq: $specialization}}
      ExaminationLevel: { ExaminationLevel: { eq: $ExaminationLevel } }
      eligibilityLevel: { eligibilityLevel: { eq: $eligibilityLevel } }
      mode: { examMode: { eq: $mode } }
    }
  ) {
    data {
      id
      attributes {
        slug
        description
        bg {
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
        examDate {
          startDate
          endDate
        }
        mode {
          data {
            id
            attributes {
              examMode
            }
          }
        }
        ExaminationLevel {
          data {
            id
            attributes {
              ExaminationLevel
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
        brochureFile {
          data {
            id
            attributes {
              url
            }
          }
        }
        applicationSubmissionDates {
          startDate
          endDate
        }
      }
    }
  }
}

`;

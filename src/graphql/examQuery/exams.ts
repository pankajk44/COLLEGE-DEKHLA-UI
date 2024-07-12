import { gql } from "@apollo/client";

export const getAllExams = gql`
  query getAllExams(
    $searchByExamName: String
    $mode: String
    $eligibilityLevel: String
    $ExaminationLevel: String
    $specialization: String
    $examSortingParameter: [String]
    $page: Int
    $pageSize: Int
  ) {
    exams(
      sort: $examSortingParameter
      filters: {
        breadCrumb: { containsi: $searchByExamName }
        specialization: { specialization: { eq: $specialization } }
        ExaminationLevel: { ExaminationLevel: { eq: $ExaminationLevel } }
        eligibilityLevel: { eligibilityLevel: { eq: $eligibilityLevel } }
        mode: { examMode: { eq: $mode } }
      }
      pagination: { page: $page, pageSize: $pageSize }
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

export const getAllSpecializations = gql`
  query getAllSpecializations {
    specializations {
      data {
        attributes {
          specialization
        }
      }
    }
  }
`;

export const getAllExaminationLevels = gql`
  query getAllExaminationLevels {
    examinationLevels {
      data {
        attributes {
          ExaminationLevel
        }
      }
    }
  }
`;

export const getAllEligibilityLevels = gql`
  query getAllEligibilityLevels {
    eligibilityLevels {
      data {
        attributes {
          eligibilityLevel
        }
      }
    }
  }
`;

export const getAllExamModes = gql`
  query getAllExamModes {
    examModes {
      data {
        id
        attributes {
          examMode
        }
      }
    }
  }
`;

export const getAllExamSortingParameters = gql`
  query getAllExamSortingParameters {
    exams {
      data {
        attributes {
          breadCrumb
          examSequence
        }
      }
    }
  }
`;

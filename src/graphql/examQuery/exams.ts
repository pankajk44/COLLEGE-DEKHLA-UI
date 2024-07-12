import { gql } from "@apollo/client";

export const getAllExams = gql`
  query getAllExams(
    $searchByExamName: String
    $modes: [String]
    $eligibilityLevel: [String]
    $ExaminationLevel: [String]
    $specializations: [String]
    $examSortingParameter: [String]
    $page: Int
    $pageSize: Int
  ) {
    exams(
      sort: $examSortingParameter
      filters: {
        breadCrumb: { containsi: $searchByExamName }
        specialization: { specialization: { in: $specializations } }
        ExaminationLevel: { ExaminationLevel: { in: $ExaminationLevel } }
        eligibilityLevel: { eligibilityLevel: { in: $eligibilityLevel } }
        mode: { examMode: { in: $modes } }
      }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
        }
      }
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

export const getExamListingPageBanner = gql`
  query getExamListingPageBanner {
    exams {
      meta {
        pagination {
          total
        }
      }
    }
    examListingPages {
      data {
        attributes {
          bgImg {
            data {
              attributes {
                url
              }
            }
          }
          title
          photos {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

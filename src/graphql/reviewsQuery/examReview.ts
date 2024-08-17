import { gql } from "@apollo/client";

export const createExamReviewsAndRating = gql`
  mutation createExamReviewsAndRating($data: ExamReviewsAndRatingInput!) {
    createExamReviewsAndRating(data: $data) {
      data {
        attributes {
          overall {
            description
          }
          DifficultyLevel {
            rating
            description
          }
          SyllabusCoverage {
            rating
            description
          }
          ExamPattern {
            rating
            description
          }
          PreparationResources {
            rating
            description
          }
          FairnessandTransparency {
            rating
            description
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
          exam {
            data {
              attributes {
                breadCrumb
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

export const updateExamReviewsAndRating = gql`
  mutation updateExamReviewsAndRating(
    $id: ID!
    $data: ExamReviewsAndRatingInput!
  ) {
    updateExamReviewsAndRating(id: $id, data: $data) {
      data {
        attributes {
          overall {
            description
          }
          DifficultyLevel {
            rating
            description
          }
          SyllabusCoverage {
            rating
            description
          }
          ExamPattern {
            rating
            description
          }
          PreparationResources {
            rating
            description
          }
          FairnessandTransparency {
            rating
            description
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
          exam {
            data {
              attributes {
                breadCrumb
              }
            }
          }
        }
      }
    }
  }
`;
export const deleteExamReviewsAndRating = gql`
  mutation deleteExamReviewsAndRating($id: ID!) {
    deleteExamReviewsAndRating(id: $id) {
      data {
        attributes {
          overall {
            description
          }
          DifficultyLevel {
            rating
            description
          }
          SyllabusCoverage {
            rating
            description
          }
          ExamPattern {
            rating
            description
          }
          PreparationResources {
            rating
            description
          }
          FairnessandTransparency {
            rating
            description
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
          exam {
            data {
              attributes {
                breadCrumb
              }
            }
          }
        }
      }
    }
  }
`;

export const getExamReviewsAndRatingByID = gql`
  query getExamReviewsAndRating($id: ID!) {
    examReviewsAndRating(id: $id) {
      data {
        attributes {
          overall {
            description
          }
          DifficultyLevel {
            rating
            description
          }
          SyllabusCoverage {
            rating
            description
          }
          ExamPattern {
            rating
            description
          }
          PreparationResources {
            rating
            description
          }
          FairnessandTransparency {
            rating
            description
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
          exam {
            data {
              attributes {
                breadCrumb
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

export const getAllExamReviewsAndRating = gql`
  query getAllExamReviewsAndRating {
    examReviewsAndRatings {
      data {
        attributes {
          overall {
            description
          }
          DifficultyLevel {
            rating
            description
          }
          SyllabusCoverage {
            rating
            description
          }
          ExamPattern {
            rating
            description
          }
          PreparationResources {
            rating
            description
          }
          FairnessandTransparency {
            rating
            description
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
          exam {
            data {
              attributes {
                breadCrumb
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

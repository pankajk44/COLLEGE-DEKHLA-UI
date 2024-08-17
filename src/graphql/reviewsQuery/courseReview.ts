import { gql } from "@apollo/client";

export const createCourseReviewsAndRating = gql`
  mutation createCourseReviewsAndRating($data: CourseReviewsAndRatingInput!) {
    createCourseReviewsAndRating(data: $data) {
      data {
        attributes {
          overall {
            description
          }
          CourseContent {
            rating
            description
          }
          TeachingQuality {
            rating
            description
          }
          LearningResources {
            rating
            description
          }
          IndustryRelevance {
            rating
            description
          }
          CareerProspects {
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
          course {
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

export const updateCourseReviewsAndRating = gql`
  mutation updateCourseReviewsAndRating(
    $id: ID!
    $data: CourseReviewsAndRatingInput!
  ) {
    updateCourseReviewsAndRating(id: $id, data: $data) {
      data {
        attributes {
          overall {
            description
          }
          CourseContent {
            rating
            description
          }
          TeachingQuality {
            rating
            description
          }
          LearningResources {
            rating
            description
          }
          IndustryRelevance {
            rating
            description
          }
          CareerProspects {
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
          course {
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
export const deleteCourseReviewsAndRating = gql`
  mutation deleteCourseReviewsAndRating($id: ID!) {
    deleteCourseReviewsAndRating(id: $id) {
      data {
        attributes {
          overall {
            description
          }
          CourseContent {
            rating
            description
          }
          TeachingQuality {
            rating
            description
          }
          LearningResources {
            rating
            description
          }
          IndustryRelevance {
            rating
            description
          }
          CareerProspects {
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
          course {
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

export const getCourseReviewsAndRatingByID = gql`
  query getCourseReviewsAndRating($id: ID!) {
    courseReviewsAndRating(id: $id) {
      data {
        attributes {
          overall {
            description
          }
          CourseContent {
            rating
            description
          }
          TeachingQuality {
            rating
            description
          }
          LearningResources {
            rating
            description
          }
          IndustryRelevance {
            rating
            description
          }
          CareerProspects {
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
          course {
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

export const getAllCourseReviewsAndRating = gql`
  query getAllCourseReviewsAndRating {
    courseReviewsAndRatings {
      data {
        attributes {
          overall {
            description
          }
          CourseContent {
            rating
            description
          }
          TeachingQuality {
            rating
            description
          }
          LearningResources {
            rating
            description
          }
          IndustryRelevance {
            rating
            description
          }
          CareerProspects {
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
          course {
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

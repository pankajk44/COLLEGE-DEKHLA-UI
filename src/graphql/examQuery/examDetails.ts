import { gql } from "@apollo/client";

export const getExamDetails = gql`
  query getExamDetails($navItem: String) {
    exams(filters: { navbars: { navItem: { eq: $navItem } } }) {
      data {
        id
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          bg {
            data {
              attributes {
                url
              }
            }
          }
          examName
          stream {
            data {
              attributes {
                stream
              }
            }
          }
          eligibilityLevel {
            data {
              id
              attributes {
                eligibilityLevel
              }
            }
          }
          mode {
            data {
              attributes {
                examMode
              }
            }
          }
          category {
            data {
              attributes {
                category
              }
            }
          }
          examDate {
            startDate
            endDate
          }
          applicationSubmissionDates {
            startDate
            endDate
          }
          ExaminationLevel {
            data {
              attributes {
                ExaminationLevel
              }
            }
          }
          news {
            data {
              attributes {
                title
              }
            }
          }
          navbars {
            data {
              attributes {
                navItem
              }
            }
          }
          brochureFile {
            data {
              attributes {
                url
              }
            }
          }
          videoGallery {
            category
            video {
              id
              videoId
            }
          }
          imageGallery {
            category
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ExamReviewsAndRatings {
            userName
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
          }
          PageData {
            ... on ComponentCommonTextEditor {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonReviewsComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              text
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonGalleryComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              text
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonFaqComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              Questions {
                id
                question
                answer
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonMainGalleryComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonVideoComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonBannerComponent {
              id
              heading
              image {
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
              text
              href
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonReviewDescriptionComponent {
              id
              heading
              headingIcon {
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
              navbar {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonNewsComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              navItem {
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
    }
  }
`;

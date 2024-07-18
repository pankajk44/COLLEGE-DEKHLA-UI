import { gql } from "@apollo/client";

export const getExamDetails = gql`
  query getExamDetails($ID: ID!) {
    exam(id: $ID) {
      data {
        id
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                width
                height
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
          streams {
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
          videoGalleryTitle {
            title {
              t1
              t2
              t3
            }
          }
          videoGallery {
            category
            video {
              id
              videoId
            }
          }
          imageGalleryTitle {
            title {
              t1
              t2
              t3
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
            ... on ComponentCommonAccordionComponent {
              accordion {
                title
                text
              }
              navItem {
                data {
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonQuoteComponent {
              quote
              navItem {
                data {
                  attributes {
                    navItem
                  }
                }
              }
              author {
                data {
                  attributes {
                    avatar {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    name
                    designation
                    updatedAt
                  }
                }
              }
            }

            ... on ComponentCommonTextEditor {
              id
              heading
              author {
                data {
                  id
                  attributes {
                    name
                    avatar {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    designation
                    updatedAt
                  }
                }
              }
              editorText: text
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
              reviewText: text
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
              galleryText: text
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
              img {
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
              bannerText: text
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

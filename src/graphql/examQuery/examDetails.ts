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
              data {
                attributes {
                  videoId
                }
              }
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
              reviewsText: text
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
              imageGallery {
                id
                category
                images {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
              title {
                t1
                t2
                t3
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
              mainGalleryText: text
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
              videoText: text
              title {
                t1
                t2
                t3
              }
              videoGallery {
                id
                category
                video {
                  data {
                    id
                    attributes {
                      videoId
                    }
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
              bannerImage {
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
              bannerTitle
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
              reviewDescriptionText: text
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
              newsText: text
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonAccordionComponent {
              accordion {
                title
                text
              }
              accordionText: text
              navItem {
                data {
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonQuoteComponent {
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
              quote

              navItem {
                data {
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

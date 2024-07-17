import { gql } from "@apollo/client";

export const getCourseDetails = gql`
  query getCourseDetails($ID: ID!) {
    course(id: $ID) {
      data {
        id
        attributes {
          slug
          breadCrumb
          courseName
          titleAddition
          description
          courseType {
            data {
              id
              attributes {
                collegeType
              }
            }
          }
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
          courseMode {
            data {
              id
              attributes {
                courseMode
              }
            }
          }
          courseSequence
          news {
            data {
              attributes {
                excerpt
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
          videoGalleryTitle {
            title {
              t1
              t2
              t3
            }
          }
          videoGallery {
            id
            category

            video {
              id
              videoId
            }
          }
          courseLevel {
            data {
              id
              attributes {
                courseLevel
              }
            }
          }
          streams {
            data {
              id
              attributes {
                stream
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
            id
            category

            images {
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
          }
          CourseReviewsAndRatings {
            id
            userName
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
        }
      }
    }
  }
`;
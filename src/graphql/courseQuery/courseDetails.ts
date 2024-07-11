import { gql } from "@apollo/client";

export const getCourseDetails = gql`
  query getCourseDetails($ID: ID!, $navItem: String) {
    courses(
      filters: { id: { eq: $ID }, navbars: { navItem: { eq: $navItem } } }
    ) {
      data {
        id
        attributes {
          slug
          breadCrumb
          courseName
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

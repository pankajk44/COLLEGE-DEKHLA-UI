import { gql } from "@apollo/client";

export const getCourseDetails = gql`
 query getCourseDetails($ID: ID!) {
  authors{
    data{
      id
      attributes{
        avatar{
          data{
            id
            attributes{
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
            faqText: navItem {
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
            mainGalleryText: navItem {
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
            videoText: navItem {
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
            bannerNavItem: navItem {
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
            reviewDescriptionText: navbar {
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
            newsText: navItem {
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

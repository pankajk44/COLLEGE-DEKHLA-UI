import { gql } from "@apollo/client";

export const getCollegeDetails = gql`
query getCollegeDetails($ID: ID!) {
  college(id: $ID) {
    data {
      id
      attributes {
        slug
        breadCrumb
        collegeLogo {
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
        collegeName
        description
        location {
          state {
            data {
              id
              attributes {
                state
              }
            }
          }
          city {
            data {
              id
              attributes {
                city
              }
            }
          }
          country {
            data {
              id
              attributes {
                country
              }
            }
          }
        }
        college_type {
          data {
            id
            attributes {
              collegeType
            }
          }
        }
        affiliation {
          data {
            id
            attributes {
              organization
            }
          }
        }
        estYear
        courses {
          examName {
            data {
              id
              attributes {
                examName
                slug
                description
              }
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
        campusSize
        noOfFaculty
        noOfStudents
        avgPackage
        hightestPackage
        genderAccepted {
          data {
            id
            attributes {
              gender
            }
          }
        }
        news {
          data {
            id
            attributes {
              icon {
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
              title
              excerpt
              category {
                data {
                  id
                  attributes {
                    category
                  }
                }
              }
              slug
              timeStamp
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
        courses {
          examName {
            data {
              id
              attributes {
                examName
              }
            }
          }
          courseFee
          courseFeeLabel
          courseName {
            data {
              id
              attributes {
                courseName
              }
            }
          }
        }
        brochureFile {
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
        streams {
          data {
            id
            attributes {
              stream
            }
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
          ... on ComponentCommonCoursesComponent {
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
          ... on ComponentCommonFacilitiesComponent {
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

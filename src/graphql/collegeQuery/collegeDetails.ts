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
              data {
                id
                attributes {
                  videoId
                }
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
            ... on ComponentCommonCoursesComponent {
              id
              heading
              headingIcon {
                data {
                  attributes {
                    url
                  }
                }
              }
              courseText: text
              navItem {
                data {
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
            ... on ComponentCommonFacilitiesComponent {
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              facilityText: text
              facility {
                data {
                  id
                  attributes {
                    facilityName
                    facilityIcon {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
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
          }

          CollegeReviewsAndRatings {
            id
            userName
            overall {
              id
              description
            }
            Academics {
              rating
              description
            }
            Faculty {
              rating
              description
            }
            Infrastructure {
              rating
              description
            }
            SocialLife {
              rating
              description
            }
            Placement {
              rating
              description
            }
          }
        }
      }
    }
  }
`;

export const getAllCoursesOfACollege = gql`
  query coursesOfACollege(
    $ID: ID!
    $searchByCourseName: String
    $courseSortingParameter: [String]
    $page: Int
    $pageSize: Int
  ) {
    college(id: $ID) {
      data {
        id
        attributes {
          courses(
            sort: $courseSortingParameter
            filters: {
              courseName: { courseName: { containsi: $searchByCourseName } }
            }
            pagination: { page: $page, pageSize: $pageSize }
          ) {
            courseName {
              data {
                id
                attributes {
                  slug
                  breadCrumb
                  courseName
                  description
                  bgImage {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        url
                      }
                    }
                  }
                  courseLevel {
                    data {
                      attributes {
                        courseLevel
                      }
                    }
                  }
                  courseType {
                    data {
                      attributes {
                        collegeType
                      }
                    }
                  }
                  duration {
                    data {
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
                      attributes {
                        courseMode
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
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const totalCoursesInACollege = gql`
  query totalCoursesInACollege($ID: ID!) {
    college(id: $ID) {
      data {
        id
        attributes {
          courses(pagination: { limit: 100 }) {
            courseName {
              data {
                id
              }
            }
          }
        }
      }
    }
  }
`;
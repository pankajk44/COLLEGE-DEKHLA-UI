import { gql } from "@apollo/client";

export const getHomePage = gql`
  query getHomePage {
    homePages {
      data {
        attributes {
          HeroSection {
            title {
              t1
              t2
              t3
            }
            text
          }
          text1
          text2
          text3
          text4
          text5
          metricData {
            title
            text
            students
            experts
            newUsers
            teams
          }
          eventsAndWebinars {
            image {
              data {
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
          }
          collegeLogos {
            image {
              data {
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            href
          }
          counsellingPackages {
            id
            title
            text
            counsellingPackagesCards {
              id
              PackageName
              isPopular
              price
              text
              lists {
                data {
                  attributes {
                    isInclude
                    text
                  }
                }
              }
              button {
                data {
                  id
                  attributes {
                    text
                    href
                  }
                }
              }
            }
          }
          faqs {
            id
            question
            answer
          }
          testimonials {
            title {
              t1
              t2
              t3
            }
            text1
            testimonialCards {
              id
              userName
              userAvatar {
                data {
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              college
              star
              comment
              storyVideoLink
            }
          }
        }
      }
    }
    popularCourses: courses(
      filters: { isPopular: { eq: true } }
      sort: "popularSequence:asc"
    ) {
      data {
        id
        attributes {
          slug
          courseName
          breadCrumb
          isPopular
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
          courseType {
            data {
              id
              attributes {
                collegeType
              }
            }
          }
          description
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
          courseLevel {
            data {
              id
              attributes {
                courseLevel
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
    topColleges: colleges(
      filters: { isTopCollege: { eq: true } }
      sort: "topCollegeSequence:asc"
      pagination: { pageSize: 10 }
    ) {
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
          navbars {
            data {
              id
              attributes {
                navItem
              }
            }
          }
          courses {
            courseFee
            courseFeeLabel
            examName {
              data {
                id
                attributes {
                  examName
                }
              }
            }
          }
          estYear
          avgPackage
          hightestPackage
          topCollegeSequence
        }
      }
    }
    news: news(sort: "updatedAt:desc", pagination: { pageSize: 10 }) {
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
          newsSequence
          updatedAt
        }
      }
    }
    featuredColleges: colleges(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          slug
          breadCrumb
          isFeatured
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
          navbars {
            data {
              id
              attributes {
                navItem
              }
            }
          }
          courses {
            courseFee
            courseFeeLabel
            examName {
              data {
                id
                attributes {
                  examName
                }
              }
            }
          }
          estYear
          avgPackage
          hightestPackage
          topCollegeSequence
        }
      }
    }
    allColleges: colleges {
      data {
        id
        attributes {
          slug
          collegeLogo {
            data {
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

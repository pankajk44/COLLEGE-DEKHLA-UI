import { gql } from "@apollo/client";

export const getAllFeaturedColleges = gql`
  query getAllFeaturedColleges {
    colleges(
      filters: { isFeatured: { eq: true } }
      pagination: { limit: 100 }
    ) {
      meta {
        pagination {
          total
        }
      }
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
  }
`;

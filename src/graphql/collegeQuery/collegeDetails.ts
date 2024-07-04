import { gql } from "@apollo/client";


//will throw error
export const getCollegeDetails = gql`
  query {
    colleges {
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
                  state_name
                }
              }
            }
            city {
              data {
                id
                attributes {
                  city_name
                }
              }
            }
            country {
              data {
                id
                attributes {
                  country_name
                }
              }
            }
          }
          college_type {
            data {
              id
              attributes {
                type_name
              }
            }
          }
          organizations {
            data {
              id
              attributes {
                organization_name
              }
            }
          }
          estYear
          exams {
            data {
              id
              attributes {
                exam_name
              }
            }
          }
          tabsSections {
            id
            navItem
            sections {
              id
              title
              author {
                data {
                  id
                  attributes {
                    avatar {
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
                    name
                    lastUpdated
                  }
                }
              }
              article
              buttons {
                data {
                  id
                  attributes {
                    text
                    link
                  }
                }
              }
              importantLinks {
                data {
                  id
                  attributes {
                    title
                    text
                    href
                  }
                }
              }
              banner {
                data {
                  id
                  attributes {
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
                    text
                    href
                  }
                }
              }
              table
              article1
              topRecruitersLogos {
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
    }
  }
`;

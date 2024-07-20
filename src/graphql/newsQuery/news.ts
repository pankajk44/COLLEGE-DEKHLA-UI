import { gql } from "@apollo/client";

export const getAllNews = gql`
  query getAllNews($searchNewsByTitle: String, $page: Int, $pageSize: Int) {
    news(
      pagination: { page: $page, pageSize: $pageSize }
      filters: { title: { containsi: $searchNewsByTitle } }
      sort: "updatedAt:desc"
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          icon {
            data {
              id
              attributes {
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
          article {
            writerAvatar {
              data {
                attributes {
                  url
                }
              }
            }
            writerName
            content
          }
          slug
          newsSequence
          updatedAt
        }
      }
    }
  }
`;

export const getAllNewsNotifications = gql`
  query getALlNewsNofications {
    news(filters: { isNotificationDisplay: { eq: true } }) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          icon {
            data {
              id
              attributes {
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
          article {
            writerAvatar {
              data {
                attributes {
                  url
                }
              }
            }
            writerName
            content
          }
          slug
          newsSequence
          notificationDisplaySequence
          updatedAt
        }
      }
    }
  }
`;
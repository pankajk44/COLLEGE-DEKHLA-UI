import { gql } from "@apollo/client";

export const getAllNews = gql`
  query getAllNews($searchNewsByTitle: String) {
    newsListingPages {
      data {
        id
        attributes {
          notification {
            id
            list {
              id
              date
              text
              slug
            }
          }
        }
      }
    }
    news(filters: { title: { containsi: $searchNewsByTitle } }) {
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
          timeStamp
          slug
          newsSequence
          updatedAt
        }
      }
    }
  }
`;
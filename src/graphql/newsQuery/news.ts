import { gql } from "@apollo/client";

export const getAllNews = gql`
  query {
    news {
      data {
        id
        attributes {
          notification {
            id
            list {
              date
              text
              href
            }
          }
          searchResults {
            id
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
            category
            href
            text
            timeStamp
          }
          news {
            id
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
            category
            title
            href
            text
            timeStamp
          }
        }
      }
    }
  }
`;

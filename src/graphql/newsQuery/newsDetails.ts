import { gql } from "@apollo/client";

export const getNewsDetails = gql`
  query getNewsDetails($ID: ID!) {
    news(filters: { id: { eq: $ID } }) {
      data {
        id
        attributes {
          title
          article {
            id
            writerAvatar {
              data {
                id
                attributes {
                  url
                }
              }
            }
            writerName
            content
          }
        }
      }
    }
  }
`;

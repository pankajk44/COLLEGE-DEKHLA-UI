import { gql } from "@apollo/client";

export const getNewsDetails = gql`
  query getNewsDetails($ID: ID!) {
    new(id: $ID) {
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
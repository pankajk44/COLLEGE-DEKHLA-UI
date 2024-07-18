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
                  alternativeText
                  width
                  height
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

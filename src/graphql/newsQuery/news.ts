import { gql } from "@apollo/client";

export const getAllNews = gql`
  query getAllNews($college: String) {
  news(filters: { college: { breadCrumb: { eq: $college } } }) {
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
      }
    }
  }
}

`;

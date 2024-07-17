import { gql } from "@apollo/client";

export const getUserForm = gql`
  query getUserForm {
    userForms {
      data {
        attributes {
          formTitle
          formDescription
          formUrl
          formStep {
            field {
              filedType
              fieldLabel
            }
            stepLabel
            stepBanner {
              data {
                attributes {
                  url
                }
              }
            }
            stepHeading
            stepDescription {
              heading
              details
            }
          }
        }
      }
    }
  }
`;

export const updateUsersMetaData = gql`
  mutation updateUsersMetaData(
    $id: ID!
    $name: String
    $gender: String
    $email: String
    $courseInterested: ID
  ) {
    updateUsersMetaData(
      id: $id
      data: {
        name: $name
        gender: $gender
        email: $email
        courseInterested: $courseInterested
      }
    ) {
      data {
        attributes {
          name
          email
        }
      }
    }
  }
`;

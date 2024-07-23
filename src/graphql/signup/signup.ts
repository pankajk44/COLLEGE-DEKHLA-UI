import { gql } from "@apollo/client";

export const allCourses = gql`
  query allCourses {
    courses {
      data {
        id
        attributes {
          breadCrumb
        }
      }
    }
  }
`;
export const allStates = gql`
  query allStates {
    states {
      data {
        id
        attributes {
          state
        }
      }
    }
  }
`;
export const allCityRelatedToStateSelected = gql`
  query allCityRelatedToStateSelected($stateId: ID!) {
    cities(filters: { state: { id: { eq: $stateId } } }) {
      data {
        id
        attributes {
          city
        }
      }
    }
  }
`;
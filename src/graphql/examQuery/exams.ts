import { gql } from "@apollo/client";

export const getAllColleges = gql`
  query {
    exams(filters: { slug: { notNull: true } }) {
      data {
        id
        attributes {
          slug
          description
          bg {
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
          examDate {
            startDate
            endDate
          }
          mode {
            data {
              id
              attributes {
                examMode
              }
            }
          }
          ExaminationLevel {
            data {
              id
              attributes {
                ExaminationLevel
              }
            }
          }
          navbars {
            data {
              id
              attributes {
                navItem
              }
            }
          }
          brochureFile {
            data {
              id
              attributes {
                name
                alternativeText
                ext
                mime
                size
                url
              }
            }
          }
          applicationSubmissionDates {
            startDate
            endDate
          }
        }
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const getAllColleges = gql`
query{
    exams{
      data{
        id
        attributes{
          examName
          description
          bg{
            data{
              id
              attributes{
                alternativeText
                width
                height
                url
              }
            }
          }
          examDate
          mode{
            data{
              id
              attributes{
                examMode
              }
            }
          }
          ExaminationLevel{
            data{
              id
              attributes{
                ExaminationLevel
              }
            }
          }
          tabsSections{
            id
            navItem
          }
          brochureUrl
          applicationSubmissionDates{
            startDate
            endDate
          }
          
        }
      }
    }
  }

  `;
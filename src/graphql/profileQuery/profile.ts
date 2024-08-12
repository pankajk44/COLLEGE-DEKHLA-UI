import { gql } from "@apollo/client";

export const updateUserProfileData = gql`
mutation updateUserData(
  $id: ID!
  $username: String
  $gender: String
  $dob: Date
  $course: ID
  $state: ID
  $city: ID
  $GraduationEducationalDetails: ComponentCommonGraduationEducationalDetailsInput
  $twelfthEducationalDetails: ComponentCommon12ThEducationalDetailsInput
  $tenthEducationalDetails: ComponentCommonTenthEducationalDetailsInput
  $appearingEntranceExam: ENUM_USERSPERMISSIONSUSER_APPEARINGENTRANCEEXAM
  $entranceExamName:String
  $entranceExamScore:Float
  $collegesApplying: [ComponentCommonCollegesApplyingInput]
  $workExperience: [ComponentCommonWorkExperienceInput]
  $studyAbroad: [ComponentCommonCollegesApplyingInput]
) {
  updateUsersPermissionsUser(
    id: $id
    data: {
      username: $username
      gender: $gender
      dob: $dob
      course: $course
      state: $state
      city: $city
      GraduationEducationalDetails: $GraduationEducationalDetails
      twelfthEducationalDetails: $twelfthEducationalDetails
      tenthEducationalDetails: $tenthEducationalDetails
      appearingEntranceExam: $appearingEntranceExam
      entranceExamName: $entranceExamName
      entranceExamScore: $entranceExamScore
      collegesApplying: $collegesApplying
      workExperience: $workExperience
      studyAbroad: $studyAbroad
    }
  ) {
    data {
      attributes {
        username
      }
    }
  }
}
`;

export const getUserData = gql`
query getUserData($ID: ID!) {
    usersPermissionsUser(id: $ID) {
      data {
        id
        attributes {
          username
          email
          dob
          course {
            data {
              id
              attributes {
                courseName
              }
            }
          }
          city {
            data {
              id
              attributes {
                city
              }
            }
          }
          state {
            data {
              id
              attributes {
                state
              }
            }
          }
          phoneNumber
          gender
          avatar{
            data{
              id
              attributes{
                url
              }
            }
          }
          GraduationEducationalDetails {
            id
            institutionName
            passingYear
            course
            gradingSystem
            percentageOrGrades
            location
          }
          
          twelfthEducationalDetails {
            id
            schoolName
            location
            passingYear
            stream
            gradingSystem
            percentageOrGrades
          }
          tenthEducationalDetails{
            institutionName
            passingYear
            location
            stream
            gradingSystem
            percentageOrGrades
          }
          appearingEntranceExam
          entranceExamName
          entranceExamScore
          collegesApplying {
            id
            collegeApplied {
              data {
                id
                attributes {
                  collegeName
                }
              }
            }
            Status
          }
          workExperience {
            id
            companyName
            jobPosition
            from
            to
          }
          studyAbroad {
            id
            collegeApplied {
              data {
                id
                attributes {
                  collegeName
                }
              }
            }
            Status
          }
        }
      }
    }
  }
    `;

import { gql } from "@apollo/client";

export const updateUserData = gql`
  mutation updateUserData(
    $id: ID!
    $GraduationEducationalDetails: ComponentCommonGraduationEducationalDetailsInput
    $twelfthEducationalDetails: ComponentCommon12ThEducationalDetailsInput
    $appearingEntranceExam: String
    $collegesApplying: [ComponentCommonCollegesApplyingInput]
    $workExperience: [ComponentCommonWorkExperienceInput]
    $studyAbroad: [ComponentCommonCollegesApplyingInput]
  ) {
    updateUsersPermissionsUser(
      id: $id
      data: {
        GraduationEducationalDetails: $GraduationEducationalDetails
        twelfthEducationalDetails: $twelfthEducationalDetails
        appearingEntranceExam: $appearingEntranceExam
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

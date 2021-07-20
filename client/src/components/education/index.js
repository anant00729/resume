import React from "react";
import {
  WorkExpLabel,
  WorkExpLabelUnderline,
  EducationWrapper,
  ExpertiseGroup,
  EducationSection,
  EduFrom,
  ClassTitleLabel,
  DurationLabel,
  ResultLabel,
  EducationInWrapper,
  EducationInItem,
} from "./styles";

function Education({ education = [] }) {
  return (
    <EducationSection>
      <WorkExpLabel>
        <WorkExpLabelUnderline>EDUCATION</WorkExpLabelUnderline>
      </WorkExpLabel>
      <ExpertiseGroup>
        {education.map(({ education_from = "", education_in = "" }) => (
          <EducationWrapper>
            <EduFrom>{education_from}</EduFrom>
            <EducationInWrapper>
              {education_in.map(
                ({ class_title = "", duration = "", result = "" }) => (
                  <EducationInItem>
                    <ClassTitleLabel>{class_title}</ClassTitleLabel>
                    <DurationLabel>{duration}</DurationLabel>
                    <ResultLabel>{result}</ResultLabel>
                  </EducationInItem>
                )
              )}
            </EducationInWrapper>
          </EducationWrapper>
        ))}
      </ExpertiseGroup>
    </EducationSection>
  );
}

export default Education;

import React from "react";
import {
  WorkExpLabel,
  WorkExpLabelUnderline,
  ExpertiseWrapper,
  ExpertiseGroup,
  SkillWrapper,
  SkillsYears,
  SkillsTitle,
  ExpertiseWrapperMain,
  RatingWrapper,
  RateContainer,
} from "./styles";

function Langauges({ languages = [] }) {
  return (
    <SkillWrapper>
      <WorkExpLabel>
        <WorkExpLabelUnderline>LANGUAGES</WorkExpLabelUnderline>
      </WorkExpLabel>
      <ExpertiseGroup>
        {languages.map(({ title = "", state = "" }) => (
          <ExpertiseWrapperMain>
            <ExpertiseWrapper>
              <SkillsTitle>{title}</SkillsTitle>
              <SkillsYears>{state}</SkillsYears>
            </ExpertiseWrapper>
          </ExpertiseWrapperMain>
        ))}
      </ExpertiseGroup>
    </SkillWrapper>
  );
}

export default Langauges;

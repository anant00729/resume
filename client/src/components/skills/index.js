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

function Skills({ skills = [] }) {
  return (
    <SkillWrapper>
      <WorkExpLabel>
        <WorkExpLabelUnderline>SKILLS</WorkExpLabelUnderline>
      </WorkExpLabel>
      <ExpertiseGroup>
        {skills.map(({ title = "", years = "", rating = [] }) => (
          <ExpertiseWrapperMain>
            <ExpertiseWrapper>
              <SkillsTitle>{title}</SkillsTitle>
              <SkillsYears>{years}</SkillsYears>
            </ExpertiseWrapper>
            <RatingWrapper>
              {rating.map((d) => (
                <RateContainer isActive={d} />
              ))}
            </RatingWrapper>
          </ExpertiseWrapperMain>
        ))}
      </ExpertiseGroup>
    </SkillWrapper>
  );
}

export default Skills;

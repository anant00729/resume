import React from "react";
import {
  WorkExpLabel,
  WorkExpLabelUnderline,
  ExpertiseWrapper,
  ExpertiseGroup,
} from "./styles";

function AreasOfExpertise({ areas_of_expertise }) {
  return (
    <>
      <WorkExpLabel>
        <WorkExpLabelUnderline>AREAS OF EXPERTISE</WorkExpLabelUnderline>
      </WorkExpLabel>
      <ExpertiseGroup>
        {areas_of_expertise.map((expertise) => (
          <ExpertiseWrapper>
            <label>{expertise}</label>
          </ExpertiseWrapper>
        ))}
      </ExpertiseGroup>
    </>
  );
}

export default AreasOfExpertise;

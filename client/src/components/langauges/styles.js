import styled from "styled-components";

export const SkillWrapper = styled.div`
  margin-top: 24px;
`;

export const WorkExpLabel = styled.label`
  color: #f79c48;
  font-weight: 700;
  font-size: 28px;
`;

export const WorkExpLabelUnderline = styled.u`
  text-decoration: none;
  border-bottom: 3px solid #f79c48;
  border-radius: 4px;
`;

export const ExpertiseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ExpertiseGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`;

export const SkillsYears = styled.div`
  margin-left: auto;
  margin-top: 8px;
  font-weight: 700;
  color: #f79c48;
`;

export const SkillsTitle = styled.label`
  margin-top: 8px;
  font-weight: 700;
`;

export const ExpertiseWrapperMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 450px;
`;

export const RatingWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 12px;
`;

export const RateContainer = styled.div`
  border: 10px solid ${(p) => (p.isActive == 1 ? "#f79c48" : "#b6bcd1")};
  border-radius: 4px;
`;

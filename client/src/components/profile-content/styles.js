import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border: 10px solid green;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 24px 8px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border: 4px solid white;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
`;

export const NameLabel = styled.label`
  border: 10px solid brown;
  margin-top: 16px;
`;

export const DescriptionLabel = styled.label`
  border: 10px solid blue;
`;

export const SocialLinksWrapper = styled.label`
  border: 10px solid pink;
`;

export const DividerLine = styled.div`
  border: 10px solid tomato;
`;

export const WorkExperienceWrapper = styled.div`
  border: 10px solid orange;
`;

import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
  background-color: #696f84;
  grid-area: header;
  display: flex;
  padding: 32px;
  grid-gap: 64px;
`;

export const SocialMediaWrapper = styled.div`
  background-color: #50566b;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  padding: 0 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 32px;
  gap: 32px;
`;

export const LeftWrapper = styled.div`
  flex: 1.7;
`;

export const RightWrapper = styled.div`
  flex: 1;
`;

export const LeftHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightHeaderWrapper = styled.div`
  display: flex;
`;

export const NameLabel = styled.label`
  color: #fff;
  font-size: 32px;
`;

export const DesignationLabel = styled.label`
  color: #f79c48;
  font-size: 24px;
  margin-top: 4px;
`;

export const IntroductionLabel = styled.label`
  color: #fff;
  font-size: 18px;
  margin-top: 8px;
  line-height: 30px;
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border: 6px solid #f79c48;
  /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%); */
  border-radius: 20px;
`;

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SocialLabel = styled.label`
  font-size: 16px;
  color: #fff;
  margin-left: ${(isPhone) => (isPhone ? "8px" : "0px")};
  white-space: nowrap;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

import React from "react";
import {
  ProfileWrapper,
  ProfileImage,
  NameLabel,
  DescriptionLabel,
  SocialLinksWrapper,
  DividerLine,
  WorkExperienceWrapper,
} from "./styles";
// import PImage from "../../images/profileimg.jpeg";

function ProfileContent() {
  return (
    <ProfileWrapper>
      {/* <ProfileImage src={PImage} /> */}
      <NameLabel>Arnav Awasthi</NameLabel>
      <DescriptionLabel>Hello all</DescriptionLabel>
      <SocialLinksWrapper></SocialLinksWrapper>
      <DividerLine />
      <WorkExperienceWrapper></WorkExperienceWrapper>
    </ProfileWrapper>
  );
}

export default ProfileContent;

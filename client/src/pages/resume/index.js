import React from "react";
import {
  MainWrapper,
  HeaderWrapper,
  SocialMediaWrapper,
  LeftWrapper,
  RightWrapper,
  NameLabel,
  DesignationLabel,
  IntroductionLabel,
  ProfilePic,
  LeftHeaderWrapper,
  RightHeaderWrapper,
  SocialIcon,
  SocialLabel,
  SocialWrapper,
  ContentWrapper,
} from "./styles";
import Email from "../../images/email.png";
import LinkedIn from "../../images/linkedin.png";
import Location from "../../images/locate-place.png";
import ProfileImg from "../../images/profile_img.png";
import Phone from "../../images/smartphone.png";
import resumeData from "../../resumeData.json";
import WorkExperience from "../../components/work-experience";
import AreasOfExpertise from "../../components/areas-of-expertise";
import Education from "../../components/education";
import Skills from "../../components/skills";
import Langauges from "../../components/langauges";

function Resume() {
  const {
    name = "",
    designation = "",
    about = "",
    email = "",
    phone = "",
    linkedin = "",
    address = "",
    profile_image = "",
    work_experience = [],
    education = [],
    areas_of_expertise = [],
    languages = [],
    skills = [],
  } = resumeData;

  return (
    <MainWrapper>
      <HeaderWrapper>
        <LeftHeaderWrapper>
          <NameLabel>{name}</NameLabel>
          <DesignationLabel>{designation}</DesignationLabel>
          <IntroductionLabel>{about}</IntroductionLabel>
        </LeftHeaderWrapper>
        <RightHeaderWrapper>
          <ProfilePic src={ProfileImg} />
        </RightHeaderWrapper>
      </HeaderWrapper>
      <SocialMediaWrapper>
        <SocialWrapper>
          <SocialIcon src={Email} />
          <SocialLabel>{email}</SocialLabel>
        </SocialWrapper>
        <SocialWrapper>
          <SocialIcon src={Phone} />
          <SocialLabel isPhone>{phone}</SocialLabel>
        </SocialWrapper>
        <SocialWrapper>
          <SocialIcon src={LinkedIn} />
          <SocialLabel>{linkedin}</SocialLabel>
        </SocialWrapper>
        <SocialWrapper>
          <SocialIcon src={Location} />
          <SocialLabel>{address}</SocialLabel>
        </SocialWrapper>
      </SocialMediaWrapper>
      <ContentWrapper>
        <LeftWrapper>
          <WorkExperience work_experience={work_experience} />
        </LeftWrapper>
        <RightWrapper>
          <AreasOfExpertise areas_of_expertise={areas_of_expertise} />
          <Education education={education} />
          <Skills skills={skills} />
          <Langauges languages={languages} />
        </RightWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Resume;

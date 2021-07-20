import React from "react";
import {
  HomeWrapper,
  BackgoundImage,
  SidePannelCardWrapper,
  MainBody,
  BackgoundImageCover,
  ProfileCard,
} from "./styles";
import ProfileContent from "../../components/profile-content";

function HomePage() {
  return (
    <HomeWrapper>
      <BackgoundImage>
        <BackgoundImageCover />
      </BackgoundImage>
      <SidePannelCardWrapper>
        <ProfileCard>
          <ProfileContent />
        </ProfileCard>
      </SidePannelCardWrapper>
      <MainBody />
    </HomeWrapper>
  );
}

export default HomePage;

import styled from "styled-components";
import banner from "../../images/bgporfolio.png";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas:
    "backgroundimage backgroundimage backgroundimage backgroundimage backgroundimage backgroundimage backgroundimage"
    "sidepannel sidepannel mainbody mainbody mainbody mainbody mainbody";
  grid-template-rows: 200px 1fr;
  border: 10px solid green;
  min-height: 100vh;
`;

export const BackgoundImage = styled.div`
  grid-area: backgroundimage;
  border: 10px solid purple;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgoundImageCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SidePannelCardWrapper = styled.div`
  grid-area: sidepannel;
  border: 10px solid brown;
`;

export const MainBody = styled.div`
  grid-area: mainbody;
  border: 10px solid pink;
`;

export const ProfileCard = styled.div`
  margin-top: -60px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-radius: 0.25rem;
  z-index: 10;
  background-color: #fff;
  height: 495px;
`;

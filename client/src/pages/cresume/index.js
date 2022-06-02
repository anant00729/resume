import React from "react";
import resumeData from "../../cresumeData.json";
import { MainContainer } from "./styles";
import ProfessionalSummary from "../../components/cresume/professional_summary";
import PersonalInformation from "../../components/cresume/personal_information";
import TechnicalSkills from "../../components/cresume/technical_skills";
import SelectedProjects from "../../components/cresume/selected_projects";
import TechnicalWorkExperience from "../../components/cresume/technical_work_exp";
import SectionTitleTwo from "../../components/cresume/section-title-two";
import Education from "../../components/cresume/c_edu";
import Certificates from "../../components/cresume/c_acc";

function CResume() {
  const { name = "", designation = "", primary_color } = resumeData;

  

  return (
    <page size="A4">
      <MainContainer>
        <div
          style={{
            fontSize: "32px",
            margin: "0px auto 0 auto",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "20px",
            margin: "12px auto 0 auto",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {designation}
        </div>
        <ProfessionalSummary />
        <div
          style={{
            borderTop: `3px solid ${primary_color}`,
            marginTop: "16px",
          }}
        ></div>
        <SectionTitleTwo
          colorBox={primary_color}
          children={<PersonalInformation />}
          name={"Professional Summary"}
        />
        <SectionTitleTwo
          colorBox={primary_color}
          children={<TechnicalSkills />}
          name={"Technical Skills"}
        />
        <SectionTitleTwo
          colorBox={primary_color}
          children={<SelectedProjects />}
          name={"Selected Projects"}
        />
        <SectionTitleTwo
          colorBox={primary_color}
          children={<TechnicalWorkExperience />}
          name={"Technical Work Experience"}
        />
        <SectionTitleTwo
          colorBox={primary_color}
          children={<Education />}
          name={"Education"}
        />
        <SectionTitleTwo
          colorBox={primary_color}
          children={<Certificates />}
          name={"Certificates"}
        />
      </MainContainer>
    </page>
  );
}

export default CResume;

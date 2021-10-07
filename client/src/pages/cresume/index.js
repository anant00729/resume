import React from "react";
import resumeData from "../../cresumeData.json";
import { MainContainer } from "./styles";
import ProfessionalSummary from "../../components/cresume/professional_summary";
import PersonalInformation from "../../components/cresume/personal_information";
import TechnicalSkills from "../../components/cresume/technical_skills";
import SelectedProjects from "../../components/cresume/selected_projects";
import TechnicalWorkExperience from "../../components/cresume/technical_work_exp";

function CResume() {
  const { name = "", designation = "" } = resumeData;

  return (
    <page size="A4">
      <MainContainer>
        <div
          style={{
            fontSize: "32px",
            margin: "24px auto 0 auto",
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
        <PersonalInformation />
        <TechnicalSkills />
        <SelectedProjects />
        <TechnicalWorkExperience />
      </MainContainer>
    </page>
  );
}

export default CResume;

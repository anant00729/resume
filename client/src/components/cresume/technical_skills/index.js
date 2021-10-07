import React from "react";
import resumeData from "../../../cresumeData.json";
import SectionTitle from "../section_title";

function TechnicalSkills() {
  const { technical_skills = [], primary_color = "" } = resumeData;
  return (
    <section>
      <SectionTitle name={"Technical Skills"} colorBox={primary_color} />
      <div
        style={{
          marginLeft: "52px",
        }}
      >
        {technical_skills.map(({ name: t_name = "", type = "" }, index) => {
          return (
            <div key={index}>
              <div>{t_name}</div>
              <div>
                {type.map((t) => {
                  return (
                    <div>
                      <div>{t.name}</div>
                      <div>{t.type}</div>
                    </div>
                  );
                })}
              </div>
              <div>{type}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechnicalSkills;

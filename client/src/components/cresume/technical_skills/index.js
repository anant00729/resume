import React from "react";
import resumeData from "../../../cresumeData.json";

function TechnicalSkills() {
  const { technical_skills = [], primary_color = "" } = resumeData;
  return (
    <section>
      <div>
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

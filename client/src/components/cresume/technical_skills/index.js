import React from "react";
import resumeData from "../../../cresumeData.json";

function TechnicalSkills() {
  const { technical_skills = [], primary_color = "" } = resumeData;
  return (
    <section>
      <ul>
        {technical_skills.map(({ name: t_name = "", type = "" }, index) => {
          return (
            <li
              style={{
                marginTop: "8px",
              }}
              key={index}
            >
              <div
                style={{
                  fontSize: "18px",
                }}
              >
                {`${t_name}: `}
              </div>
              <div>
                {/* {type.map((t, j) => {
                  return (
                    <div key={j}>
                      <div>{t.name}</div>
                      <div>{t.type}</div>
                    </div>
                  );
                })} */}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "6px",
                }}
              >
                {type.join(", ")}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TechnicalSkills;

import React from "react";
import resumeData from "../../../cresumeData.json";
import SectionTitle from "../section_title";

function TechnicalWorkExperience() {
  const { technical_exp = [], primary_color = "" } = resumeData;
  return (
    <section>
      <SectionTitle
        name={"Technical Work Experience"}
        colorBox={primary_color}
      />
      <div
        style={{
          marginLeft: "52px",
        }}
      >
        {technical_exp.map(
          (
            {
              title = "",
              duration = "",
              roles = [],
              project_link = "",
              designation = "",
            },
            index
          ) => {
            return (
              <div key={index}>
                <h3>{title}</h3>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{designation}</div>
                  <div>{duration}</div>
                </p>
                <div>
                  {roles.map((r, j) => {
                    return (
                      <div key={j}>
                        <div>{r}</div>
                      </div>
                    );
                  })}
                </div>
                <div>{project_link}</div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default TechnicalWorkExperience;

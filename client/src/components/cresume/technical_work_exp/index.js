import React from "react";
import resumeData from "../../../cresumeData.json";

function TechnicalWorkExperience() {
  const { technical_exp = [], primary_color = "" } = resumeData;
  return (
    <section>
      <div>
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

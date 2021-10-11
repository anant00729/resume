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
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6px",
                  }}
                >
                  <div>{designation}</div>
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {duration}
                  </div>
                </div>
                <ul>
                  {roles.map((r, j) => {
                    return (
                      <li
                        style={{
                          marginTop: "6px",
                        }}
                        key={j}
                      >
                        <div>{r}</div>
                      </li>
                    );
                  })}
                </ul>
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

import React from "react";
import { educations } from "../../../cresumeData.json";

function Education() {
  return (
    <section>
      <div>
        {educations.map(
          (
            { title = "", duration = "", name_of_uni = "", courses = [] },
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
                  {name_of_uni}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {duration}
                  </div>
                </div>
                <div
                  style={{
                    margin: "6px 0 10px 0",
                  }}
                >
                  {courses}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Education;

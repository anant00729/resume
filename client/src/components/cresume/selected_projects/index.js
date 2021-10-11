import React from "react";
import resumeData from "../../../cresumeData.json";

function SelectedProjects() {
  const { selected_projects = [] } = resumeData;

  return (
    <section>
      <div>
        {selected_projects.map(
          (
            {
              title = "",
              duration = "",
              tasks = [],
              project_link = "",
              stack_used = "",
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
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "6px",
                  }}
                >
                  <a href={project_link}>{project_link}</a>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6px",
                  }}
                >
                  <div>{stack_used}</div>
                  <div>{duration}</div>
                </div>
                <ul>
                  {tasks.map((t, j) => {
                    return (
                      <li
                        style={{
                          marginTop: "4px",
                        }}
                        key={j}
                      >
                        <div>{t}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default SelectedProjects;

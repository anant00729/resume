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
                <h3>{title}</h3>
                <h4>{project_link}</h4>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{stack_used}</div>
                  <div>{duration}</div>
                </p>
                <div>
                  {tasks.map((t, j) => {
                    return (
                      <div key={j}>
                        <div>{t}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default SelectedProjects;

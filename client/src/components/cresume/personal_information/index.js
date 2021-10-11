import React from "react";
import resumeData from "../../../cresumeData.json";
import SectionTitle from "../section_title";

function PersonalInformation() {
  const { aboutList = [], primary_color = "" } = resumeData;

  return (
    <section>
      <ul>
        {aboutList.map((about, index) => {
          return (
            <li
              style={{
                marginTop: "4px",
              }}
              key={index}
            >
              {about}{" "}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PersonalInformation;

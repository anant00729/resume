import React from "react";
import resumeData from "../../../cresumeData.json";
import SectionTitle from "../section_title";

function PersonalInformation() {
  const { aboutList = [], primary_color = "" } = resumeData;

  return (
    <section>
      <SectionTitle name={"Professional Summary"} colorBox={primary_color} />
      <div
        style={{
          marginLeft: "52px",
          color: "green",
        }}
      >
        {aboutList.map((about, index) => {
          return <div key={index}>{about} </div>;
        })}
      </div>
    </section>
  );
}

export default PersonalInformation;

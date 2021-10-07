import React from "react";
import resumeData from "../../../cresumeData.json";

function ProfessionalSummary() {
  const { phone = "", email = "", linkedin = "", githubLink = "" } = resumeData;
  return (
    <section
      style={{
        marginLeft: "52px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          margin: "10px 0",
          fontWeight: "600",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              marginBottom: "4px",
            }}
          >
            <label>{phone}</label>
          </div>
          <label>{email}</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "end",
          }}
        >
          <div
            style={{
              marginBottom: "4px",
            }}
          >
            <label>{linkedin}</label>
          </div>
          <label>{githubLink}</label>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSummary;

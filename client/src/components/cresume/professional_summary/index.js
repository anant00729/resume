import React from "react";
import resumeData from "../../../cresumeData.json";

function ProfessionalSummary() {
  const { phone = "", email = "", linkedin = "", githubLink = "" } = resumeData;
  return (
    <section>
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
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <a href={`mailto:${email}`}>{email}</a>
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
            <a href={linkedin}>{linkedin}</a>
          </div>
          <a href={githubLink}>{githubLink}</a>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSummary;

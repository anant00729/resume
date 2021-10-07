import React from "react";

function SectionTitle({ name = "", colorBox = "" }) {
  return (
    <div
      style={{
        display: "grid",
        margin: "12px 0",
        gridTemplateColumns: "40px 1fr",
      }}
    >
      <div
        style={{
          backgroundColor: colorBox,
          height: "60px",
        }}
      ></div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          marginLeft: "14px",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default SectionTitle;

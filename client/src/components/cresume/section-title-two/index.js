import React from "react";

function SectionTitleTwo({ colorBox, children, name }) {
  return (
    <div
      style={{
        display: "grid",
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
          marginLeft: "14px",
        }}
      >
        <label
          style={{
            fontSize: "20px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
          }}
        >
          {name}
        </label>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default SectionTitleTwo;

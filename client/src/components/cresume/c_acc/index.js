import React from "react";
import { certificates_and_acc } from "../../../cresumeData.json";

function Certificates() {
  return (
    <section>
      <div>
        {certificates_and_acc.map(({ title = "", duration = "" }, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                }}
              >
                <div>{title}</div>
                <div
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {duration}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;

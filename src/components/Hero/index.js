import React from "react";

function Hero({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="Hero"
    >
      {children}
    </div>
  );
}

export default Hero;

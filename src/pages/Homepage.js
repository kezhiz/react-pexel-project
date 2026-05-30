import React from "react";
import TextType from "../components/TextType";
import DotGrid from "../components/DotGrid";
import CurvedLoop from "../components/CurvedLoop";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div style={{ width: "100%", height: "760px", position: "relative" }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#182127"
          activeColor="#27caff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <h1 style={{ fontSize: "7rem", margin: 0, fontWeight: "bold" }}>
            Zhiyu's Portfalio
          </h1>
          <p style={{ fontSize: "1.5rem", opacity: 0.8 }}>Creative Developer</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

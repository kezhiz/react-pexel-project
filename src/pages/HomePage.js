import React from "react";
import { Link } from "react-router-dom";
import DotGrid from "../components/DotGrid";

function HomePage() {
  return (
    <section className="home-hero">
      <div className="home-hero__grid" aria-hidden="true">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#182127"
          activeColor="#00ffff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="home-hero__content">
        <p className="eyebrow">My Website</p>
        <h1>Zhiyu's Portfolio</h1>
        <h2 className="home-hero__lead">Web Dev/Game VFX Artist</h2>
        <div className="home-hero__actions">
          <Link className="btn_primary" to="/Projects">
            View Projects
          </Link>
          <Link className="btn_secondary" to="/About">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

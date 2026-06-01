import React from "react";
import { Link } from "react-router-dom";
import DotGrid from "../components/DotGrid";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HomePage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".animate-title", {
        duration: 1.2,
        opacity: 0,
        y: 40,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className="home-hero">
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
        <p className="eyebrow animate-title">My Website</p>
        <h1 className="animate-title">ZHIYU'S PORTFOLIO</h1>
        <h2 className="home-hero__lead animate-title">
          Web Dev/Game VFX Artist
        </h2>
        <div className="home-hero__actions animate-title">
          <Link className="btn_primary" to="/Projects">
            View Projects
          </Link>
          <Link className="btn_secondary " to="/About">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

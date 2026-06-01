import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import SearchPexel from "./pages/SearchPexel";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./styles/style.scss";
import Layout from "./Layout";

function App() {
  const location = useLocation();
  const pageRef = useRef(null);

  useGSAP(() => {
    const isHomePage = location.pathname === "/";

    const activePage = pageRef.current?.querySelector(".page-wrapper");
    if (activePage) {
      gsap.fromTo(
        activePage,
        { opacity: 0, x: -20, scale: 0.9 },
        { opacity: 1, x: 0, duration: 0.4, scale: 1, ease: "power2.out" },
      );
      if (isHomePage) {
        return;
      }

      const targetRows = activePage.querySelectorAll(
        "h1, h2, h3, p, .btn_primary, .btn_secondary, .animate-title,span",
      );

      if (targetRows.length > 0) {
        gsap.fromTo(
          targetRows,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.1,
          },
        );
      }
    }
  }, [location.pathname]);

  return (
    <div ref={pageRef} style={{ width: "100%", height: "100%" }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="page-wrapper">
                <HomePage />
              </div>
            }
          />
          <Route
            path="About"
            element={
              <div className="page-wrapper">
                <About />
              </div>
            }
          />
          <Route
            path="SearchPexel"
            element={
              <div className="page-wrapper">
                <SearchPexel />
              </div>
            }
          />
          <Route
            path="Projects"
            element={
              <div className="page-wrapper">
                <Projects />
              </div>
            }
          />
          <Route
            path="Contact"
            element={
              <div className="page-wrapper">
                <Contact />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="page-wrapper">
                <Page404 />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

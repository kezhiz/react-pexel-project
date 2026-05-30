import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="root-container">
      <nav>
        <Link to="/" className="navbar_logo">
          ZHIYU
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/SearchPexel">SerchPexel</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {" "}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

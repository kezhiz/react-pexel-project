import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/About", label: "About" },
  { to: "/Projects", label: "Projects" },
  { to: "/SearchPexel", label: "Pexels Lab" },
  { to: "/Contact", label: "Contact" },
];

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="root-container">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="navbar_logo" onClick={() => setIsOpen(false)}>
          ZHIYU
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

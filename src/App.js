import React from "react";
import { Route, Routes, HashRouter, Outlet } from "react-router-dom";

import SearchPexel from "./pages/SearchPexel";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

import DotGrid from "./components/DotGrid";
import CurvedLoop from "./components/CurvedLoop";
import "./styles/style.css";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="About" element={<About />} />
          <Route path="SearchPexel" element={<SearchPexel />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

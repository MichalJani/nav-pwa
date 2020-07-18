import React from "react";

import { NavBar } from "../NavBar/NavBar";

import "./LandingPage.css";

export const LandingPage = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div className={`landing-page ${isNavbarOpen && `landing-page--rotated`}`}>
      <NavBar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </div>
  );
};

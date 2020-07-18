import React from "react";

import { NavBar } from "../NavBar/NavBar";

export const LandingPage = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div
      className={`landing-page ${isNavbarOpen ? `landing-page--tilted` : null}`}
    >
      <NavBar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      {/*  <div className="nav-bar">
        <div className="nav-bar__header">
          <div
            className="nav-bar__button"
            onClick={() => toggleNavbar(!isNavbarOpen)}
          >
            <div />
            <div />
            <div />
          </div>
          <div className="nav-bar__title">START</div>
        </div>
      </div> */}
    </div>
  );
};

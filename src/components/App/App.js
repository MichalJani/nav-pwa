import React, { useState } from "react";

import { LandingPage } from "../LandingPage/LandingPage";
import { NavPage } from "../NavPage/NavPage";
import "./App.css";

export const App = () => {
  const [isNavbarOpen, toggleNavbar] = useState(false);
  const handleStartClick = () => {
    toggleNavbar = !isNavbarOpen;
  };

  return (
    <div className="app">
      {isNavbarOpen ? (
        <NavPage isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      ) : (
        /*  <div className="nav-screen">
          <div className="nav-screen__menu">
            <div className="nav-screen__name">Viktor</div>
            <div className="nav-screen__menu-list">
              <div className="nav-screen__menu-list-top">
                <div onClick={() => toggleNavbar(!isNavbarOpen)}>Start</div>
                <div>Your Cart</div>
                <div>Favourites</div>
                <div>Your Orders</div>
              </div>
              <div className="nav-screen__menu-list-bottom">
                <div>Sign Out</div>
              </div>
            </div>
          </div>

          <div className="container">
            <div
              className={`landing-page ${
                isNavbarOpen ? `landing-page--tilted` : null
              }`}
            >
              <div className="nav-bar">
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
              </div>
            </div>
          </div>
        </div> */
        <LandingPage isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        /*   <div
          className={`landing-page ${
            isNavbarOpen ? `landing-page--tilted` : null
          }`}
        >
          <div className="nav-bar">
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
          </div>
        </div> */
      )}
    </div>
  );
};

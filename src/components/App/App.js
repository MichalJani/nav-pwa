import React, { useState } from 'react';

import { LandingPage } from '../LandingPage/LandingPage';
import { NavPage } from '../NavPage/NavPage';

import './App.css';

export const App = () => {
  const [isNavbarOpen, toggleNavbar] = useState(false);

  return (
    <div className='app'>
      {isNavbarOpen ? (
        <NavPage isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      ) : (
        <LandingPage isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      )}
    </div>
  );
};

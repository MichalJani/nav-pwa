import React from 'react';

import './NavBar.css';

export const NavBar = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar__header'>
        <div
          className='nav-bar__button'
          onClick={() => toggleNavbar(!isNavbarOpen)}
        >
          <div />
          <div />
          <div />
        </div>
        <div className='nav-bar__title'>START</div>
      </div>
    </div>
  );
};

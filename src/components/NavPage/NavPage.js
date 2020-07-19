import React from 'react';

import { LandingPage } from '../LandingPage/LandingPage';

import './NavPage.css';

export const NavPage = ({ toggleNavbar, isNavbarOpen }) => {
  return (
    <div className='nav-page'>
      <div className='nav-page__menu'>
        <div className='nav-page__name'>Viktor</div>
        <div className='nav-page__menu-list'>
          <div className='nav-page__menu-list-top'>
            <div onClick={() => toggleNavbar(!isNavbarOpen)}>Start</div>
            <div>Your Cart</div>
            <div>Favourites</div>
            <div>Your Orders</div>
          </div>
          <div className='nav-page__menu-list-bottom'>
            <div>Sign Out</div>
          </div>
        </div>
      </div>
      <div className='nav-page__app-container'>
        <LandingPage isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      </div>
    </div>
  );
};

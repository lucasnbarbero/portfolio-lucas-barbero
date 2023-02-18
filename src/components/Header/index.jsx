import React from 'react';
import './header.css';
import ME from '../../assets/me.png';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <div className="header__content-title">
            <h5>Hello I'm</h5>
            <h1>Lucas Barbero</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
          </div>
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </div>

        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

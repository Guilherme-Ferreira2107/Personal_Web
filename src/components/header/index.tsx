import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <>
    <div id="header">
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#TOP" className="navbar-brand">FULLSTACK DEVELOPER</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="menu-right"><a href="#intro">ABOUT</a></li>
                <li className="menu-right"><a href="#education">EDUCATION</a></li>
                <li className="menu-right"><a href="#experience">EXPERIENCE</a></li>
                <li className="menu-right"><a href="#skills">SKILLS</a></li>
                <li className="menu-right"><a href="#portfolio">PORTFOLIO</a></li>                
                <li className="menu-right"><a href="#contacts">CONTACTS</a></li>                
              </ul>
            </div>
          </div>
          <div className="progress-bar" id="myBar"></div>
        </nav>
      </header>
    </div>
    </>
  );
}

export default Header;
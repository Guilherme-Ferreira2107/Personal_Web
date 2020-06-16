import React from 'react';
import './styles.scss';

import About from '../about';
import Portfolio from '../portfolio';
import Skills from '../skills';
import Contacts from '../contacts';
import Education from '../education';
import Experience from '../experience';

const Main = () => {
  return (
    <>
      <About />
      <Education /> 
      <Experience /> 
      <Skills />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default Main;

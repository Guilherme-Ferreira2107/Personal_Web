import React from 'react';
import './styles.scss';

import Header from './header';
import Footer from './footer';
import Intro from './intro';
import Main from './main';

const Index = () => {
  return (
    <>
      <Header />
      <Intro />
      <Main />
      <Footer />
    </>
  );
}

export default Index;

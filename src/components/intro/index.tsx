import React from 'react';
import './styles.scss';
import Name from './name';

const Intro = () => {
  return (
    <div id="intro">
      <div className="container container-fluid">
        <div className="box-name text-center">
          <Name />
          <h4>Development Full Stack in React.js and Node.js</h4><br />
        </div>
      </div>
    </div>
  );
}

export default Intro;
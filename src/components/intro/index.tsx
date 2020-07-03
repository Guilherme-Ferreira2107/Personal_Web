import React from 'react';
import './styles.scss';

import {Motion, spring} from 'react-motion';
import { red } from 'color-name';

  class Intro extends React.Component {
    state = {
      left: 0
    };
  
    render () {
      return (
        <React.Fragment>
          <div id="intro">
            <div className="container container-fluid">
              <div className="box-name text-center">
                <Motion defaultStyle={{ left: -500 }} style={{ left: spring(10) }}>
                  {val => <h2 style={{ position: 'relative', ...val }}>
                  <h2>GUILHERME SANTOS<span>_</span></h2>
                  </h2>}
                  </Motion>
                  <Motion defaultStyle={{ left: -800 }} style={{ left: spring(10) }}>
                  {val => <h2 style={{ position: 'relative', ...val }}>
                  <h4>Development Full Stack in React.js and Node.js</h4><br />
                  </h2>}
                </Motion>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
}

export default Intro;
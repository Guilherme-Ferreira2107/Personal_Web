import React from 'react';
import './styles.scss';

import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

import RN from './rn';
import Node from './nodejs';
import Mysql from './mysql';
import Typescript from './typescript';
import MongoDB from './mongodb';
import Scss from './sass';

class Skills extends React.Component {  
  render() {
    return (
      <div id="skills" >
        <div className="container-fluid bg-2 text-center">

          <Controller>
            <Scene triggerHook="onLeave" duration={2500} pin >
              {(progress: number) => (
                <Timeline totalProgress={progress} paused>
                  <Timeline target={
                    <div>
                        <h3 className="margin text-center">
                          <div className="title">
                            <span>HABILIDADES</span><br /><br /><br />
                          </div> 
                        </h3>
                    </div>
                    }>
                    <Tween from={{ y: 200, opacity: 0}} to={{ y: 0, opacity: 1 }} />
                  </Timeline>
                </Timeline>
              )}
            </Scene>

            <Scene triggerHook="onLeave" duration={2800} pin >
              {(progress: number) => (
                <Timeline totalProgress={progress} paused>
                  <Timeline target={ 
                    <div className="row">
                      <div className="col-sm-4">
                        <RN />
                      </div>
                      <div className="col-sm-4">
                        <Node />
                      </div>
                      <div className="col-sm-4">
                        <Mysql /><br /><br />
                      </div>
                    </div>
                  }>
                  <Tween from={{ y: 500, opacity: 0, }} to={{ y: 0, opacity: 1, }} />
                  </Timeline>
                </Timeline>
              )}
            </Scene>

            <Scene triggerHook="onLeave" duration={3000} pin >
              {(progress: number) => (
                <Timeline totalProgress={progress} paused>
                  <Timeline target={ 
                    <div className="row">
                    <div className="col-sm-4">
                      <Typescript />
                    </div>
                    <div className="col-sm-4">
                      <MongoDB />
                    </div>
                    <div className="col-sm-4">
                      <Scss />
                    </div>
                  </div>
                  }>
                  <Tween from={{ y: 600, opacity: 0 }} to={{ y: 0, opacity: 1, }} />
                  </Timeline>
                </Timeline>
              )}
            </Scene>

          </Controller>
        </div>
      </div>
    );
  }
}

export default Skills;
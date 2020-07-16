import React from 'react';
import './styles.scss';

import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap'

import Virta from './virta';
import Multigeo from './multigeo';;

class Experience extends React.Component {
  
  render() {
    
    return (
      <div id="experience">
        <div className="container-fluid bg-4">
          <Controller>
            <Scene triggerHook="onLeave" duration={1500} pin >
              {(progress: number) => (
                  <Timeline totalProgress={progress} paused>
                      <Timeline target={
                          <div>
                              <h3 className="margin text-center">
                                <div className="title">
                                  <span>EXPERIÊNCIAS</span><br /><br />
                                </div> 
                              </h3>
                          </div>
                      }>
                      <Tween from={{ y: 300, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
                      </Timeline>
                  </Timeline>
              )}
            </Scene>

            <Scene triggerHook="onLeave" duration={1550} pin >
              {(progress: number) => (
                <Timeline totalProgress={progress} paused>                                 
                  <Timeline target={  
                    <div className="row">
                      <main>
                        <Virta />
                        <Multigeo />
                      </main>
                    </div>
                  }>
                  <Tween from={{ y: -700, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
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

export default Experience;
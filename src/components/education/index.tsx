import React from 'react';
import './styles.scss';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Uninter from './uninter';
import Codecademy from './codecademy';
import FundacaoBradesco from './fund-bradesco';

class Education extends React.Component {
    render(){
        return (
            <div id="education">
                <div className="container-fluid bg-3">
                    <Controller>
                        <Scene triggerHook="onLeave" duration={500} pin >
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>                                 
                                    <Timeline target={
                                        <div>
                                            <h3 className="margin text-center">
                                                <div>
                                                    <span className="title">EDUCAÇÃO</span><br /><br />
                                                </div>
                                            </h3>
                                        </div>
                                    }>
                                    <Tween from={{ y: 300, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>

                        <Scene triggerHook="onLeave" duration={500} pin >
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline target={ 
                                        <div>
                                            <Uninter />
                                        </div> 
                                    }>
                                    <Tween from={{ y: 700, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>

                        <Scene triggerHook="onLeave" duration={700} pin >
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline target={
                                        <div>
                                            <Codecademy />
                                        </div>
                                    }>
                                    <Tween from={{ y: 1500, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>

                        <Scene triggerHook="onLeave" duration={800} pin >
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline target={
                                        <div>
                                            <FundacaoBradesco />
                                        </div>
                                    }>
                                    <Tween from={{ y: 3000, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
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

export default Education;
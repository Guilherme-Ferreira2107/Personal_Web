import React from 'react'
import './styles.scss'

import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'

import RN from './rn'
import Node from './nodejs'
import Mysql from './mysql'
import Typescript from './typescript'

const Skills = () => {
    return (
        <div id="skills">
            <div className="container-fluid bg-2 text-center">
                <Controller>
                    <Scene triggerHook="onLeave" duration={2500} pin>
                        {(progress: number) => (
                            <Timeline totalProgress={progress} paused>
                                <Timeline
                                    target={
                                        <div>
                                            <h3 className="margin text-center">
                                                <div className="title">
                                                    <span>HABILIDADES</span>
                                                </div>
                                            </h3>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{ y: 200, opacity: 0 }}
                                        to={{ y: 0, opacity: 1 }}
                                    />
                                </Timeline>
                            </Timeline>
                        )}
                    </Scene>

                    <Scene triggerHook="onLeave" duration={2800} pin>
                        {(progress: number) => (
                            <Timeline totalProgress={progress} paused>
                                <Timeline
                                    target={
                                        <div className="row content-line-one">
                                            <div className="col-sm-4">
                                                <RN title="REACT.JS" />
                                            </div>
                                            <div className="col-sm-4">
                                                <RN title="REACT NATIVE" />
                                            </div>
                                            <div className="col-sm-4">
                                                <Typescript />
                                            </div>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{ y: 500, opacity: 0 }}
                                        to={{ y: 0, opacity: 1 }}
                                    />
                                </Timeline>
                            </Timeline>
                        )}
                    </Scene>

                    <Scene triggerHook="onLeave" duration={3000} pin>
                        {(progress: number) => (
                            <Timeline totalProgress={progress} paused>
                                <Timeline
                                    target={
                                        <div className="row content-line-two">
                                            <div>
                                                <Node />
                                            </div>
                                            <div>
                                                <Mysql />
                                            </div>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{ y: 600, opacity: 0 }}
                                        to={{ y: 0, opacity: 1 }}
                                    />
                                </Timeline>
                            </Timeline>
                        )}
                    </Scene>
                </Controller>
            </div>
        </div>
    )
}

export default Skills

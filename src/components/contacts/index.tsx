import React from 'react'
import './styles.scss'

import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'

const Contacts = () => {
    return (
        <div id="contacts">
            <div className="container-fluid bg-2">
                <div className="container">
                    <Controller>
                        <Scene triggerHook="onLeave" duration={3000} pin>
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline
                                        target={
                                            <div>
                                                <h3 className="margin text-center">
                                                    <div className="title">
                                                        <span>CONTATOS</span>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </h3>
                                            </div>
                                        }
                                    >
                                        <Tween
                                            from={{ y: 1500, opacity: 0 }}
                                            to={{ y: 0, opacity: 1 }}
                                        />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>

                        <Scene triggerHook="onLeave" duration={3500} pin>
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline
                                        target={
                                            <div className="col-sm-7">
                                                <div className="row">
                                                    <h4>
                                                        Sou um desenvolvedor
                                                        criativo, que enxerga
                                                        além do objetivo
                                                        proposto, Sempre
                                                        buscando criar a melhor
                                                        comunicação com minha
                                                        equipe. Sei que acabamos
                                                        de nos conhecer, mas já
                                                        tenho um bom
                                                        pressentimento.
                                                    </h4>
                                                    <p>
                                                        Obrigado pela visita, e
                                                        para me conhecer melhor,
                                                        por favor entre em
                                                        contato. Ou melhor
                                                        ainda, vamos marcar para
                                                        tomar um café virtual. É
                                                        por conta da casa!
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    >
                                        <Tween
                                            from={{ y: 1500, opacity: 0 }}
                                            to={{ y: 0, opacity: 1 }}
                                        />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>

                        <Scene triggerHook="onLeave" duration={3500} pin>
                            {(progress: number) => (
                                <Timeline totalProgress={progress} paused>
                                    <Timeline
                                        target={
                                            <div className="col-sm-5 text-right">
                                                <h4>
                                                    Retornarei o contato em até
                                                    24 horas.
                                                </h4>
                                                <p>
                                                    <em>
                                                        Contact us and we'll get
                                                        back to you within 24
                                                        hours.
                                                    </em>
                                                </p>
                                                <p>
                                                    São Paulo, SP{' '}
                                                    <span className="glyphicon glyphicon-map-marker"></span>
                                                </p>
                                                <p>
                                                    +55 11 95471-8677{' '}
                                                    <span className="glyphicon glyphicon-phone"></span>
                                                </p>
                                                <p>
                                                    <a href="mailto:guilhermerferreira2107@gmail.com">
                                                        guilhermeferreira2107@gmail.com
                                                    </a>{' '}
                                                    <span className="glyphicon glyphicon-envelope"></span>
                                                </p>
                                            </div>
                                        }
                                    >
                                        <Tween
                                            from={{ y: 3000, opacity: 0 }}
                                            to={{ y: 0, opacity: 1 }}
                                        />
                                    </Timeline>
                                </Timeline>
                            )}
                        </Scene>
                    </Controller>
                </div>
            </div>
        </div>
    )
}

export default Contacts

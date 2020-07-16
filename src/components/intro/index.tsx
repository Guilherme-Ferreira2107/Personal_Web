import React from 'react';
import './styles.scss';
import { motion } from "framer-motion";
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

class Intro extends React.Component {  
  render () {
    return (
      <div id="intro">
        <div className="container container-fluid">
          <Controller>
            <Scene triggerHook="onLeave" duration={500} pin >
              {(progress: number) => (
                <Timeline totalProgress={progress} paused>                                 
                  <Timeline target={
                    <div>
                      <motion.div 
                        className="box-intro container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                              >
                        
                        <div className="box-name text-center">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1, duration: 1 }}
                            >
                            <h2>GUILHERME SANTOS<span>_</span></h2></motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.3, duration: 1 }}
                            ><h4>Full Stack Developer</h4></motion.div><br />
                        </div>
                        
                        <motion.div className="box-apresent text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6, duration: 1 }}
                        >
                          <p>"Hello World, me chamo Guilherme e sou desenvolvedor nas tecnologias
                            Node, React e React Native. <br />
                            Desde 2017 venho estudando e aplicando todo o conhecimento adquirido 
                            em aplicações web e <i>mobile</i>. <br />
                            Trago comigo não apenas experiência de projetos, mas também a paixão <br />
                            por cada linha de código digitado"
                          </p><br />
                        </motion.div>
                        
                        <div className="col-sm-9 text-center">
                          <motion.div className="text-right"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9, duration: 1 }}
                          >
                            <em>Codar é simplesmente minha paixão!</em>
                          </motion.div><br />
                        </div>
                      
                      </motion.div>
                    </div>
                  }>
                  <Tween from={{ y: 0, opacity: 1 }} to={{ y: 150, opacity: 0 }} />
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

export default Intro;
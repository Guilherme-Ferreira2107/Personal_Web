import React from 'react'
import { motion } from 'framer-motion'

import './styles.scss'

const Header = () => {
    return (
        <header id="header">
            <nav className="navbar navbar-default navbar-fixed-top">
                <motion.div
                    className="container"
                    initial={{ y: -120 }}
                    animate={{ y: -5 }}
                    transition={{
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 50,
                    }}
                >
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#TOP" className="navbar-brand">
                            FULLSTACK DEVELOPER
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="menu-right">
                                <a href="#intro">SOBRE</a>
                            </li>
                            <li className="menu-right">
                                <a href="#education">EDUCAÇÃO</a>
                            </li>
                            <li className="menu-right">
                                <a href="#experience">EXPERIÊNCIA</a>
                            </li>
                            <li className="menu-right">
                                <a href="#skills">HABILIDADES</a>
                            </li>
                            <li className="menu-right">
                                <a href="#portfolio">PORTFÓLIO</a>
                            </li>
                            <li className="menu-right">
                                <a href="#contacts">CONTATOS</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </nav>
        </header>
    )
}

export default Header

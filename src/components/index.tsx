import React from 'react'
import './styles.scss'

import Header from './header'
import Portfolio from './portfolio'
import Skills from './skills'
import Contacts from './contacts'
import Education from './education'
import Experience from './experience'
import Intro from './intro'
import Footer from './footer'

class Index extends React.Component {
    render() {
        return (
            <div id="fullpage">
                <div id="header" className="section">
                    <Header />
                </div>
                <div id="intro" className="section">
                    <Intro />
                </div>
                <div id="education" className="section">
                    <Education />
                </div>
                <div id="experience" className="section">
                    <Experience />
                </div>
                <div id="skills" className="section skills">
                    <Skills />
                </div>
                <div id="portfolio" className="section">
                    <Portfolio />
                </div>
                <div id="contacts" className="section">
                    <Contacts />
                </div>
                <div id="footer" className="section">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Index

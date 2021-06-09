import React from 'react'
import './styles.scss'

import iconLinkedin from '../../assets/icons/linkedin.svg'
import iconWhatsapp from '../../assets/icons/whatsapp.png'
import iconGithub from '../../assets/icons/github.svg'
import moment from 'moment'

const Footer = () => {
    const currentYear = moment().format('YYYY')
    return (
        <div id="footer">
            <footer className="container-fluid bg-8 text-center">
                <div className="container-fluid">
                    <a
                        className="backToTop"
                        href="#TOP"
                        title="Voltar ao ínicio"
                    >
                        <span className="glyphicon glyphicon-chevron-up"></span>
                    </a>
                </div>
                <div className="container-fluid social">
                    <a
                        href="https://www.linkedin.com/in/guifsantos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={iconLinkedin} alt="Linkedin" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5511954718677"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={iconWhatsapp} alt="Whatsapp" />
                    </a>
                    <a
                        href="https://github.com/Guilherme-Ferreira2107"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={iconGithub} alt="Github" />
                    </a>
                </div>
                <p>
                    Copyright ©{currentYear} Todos os direitos reservados |
                    Desenvolvedor Fullstack Javascript{' '}
                    <a
                        href="https://www.linkedin.com/in/guifsantos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GUILHERME SANTOS
                    </a>
                </p>
                <small>v.1.0.0</small>
            </footer>
        </div>
    )
}

export default Footer

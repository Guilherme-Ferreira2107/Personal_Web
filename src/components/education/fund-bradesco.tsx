import React from 'react'
import './styles.scss'

const FundacaoBradesco = () => {
    const imagemFundacaoBradesco =
        'https://media-exp1.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_200_200/0/1547486273811?e=2159024400&v=beta&t=gfUaZPcsWoOgCHS88FQ6Qp2Ia9g3EBVoFRsoLkQhI3U'
    const linkFundacaoBradesco = 'https://www.ev.org.br/'

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <div className="ImgC">
                        <img
                            src={imagemFundacaoBradesco}
                            alt="Fundação Bradesco"
                        />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="titleC">
                        <h4>Fundamentos de Governança de TI</h4>
                    </div>
                    <div className="TextC">
                        <p>
                            Através da Escola Virtual da Fundação Bradesco,
                            obtive com nota máxima a certificação em <br />
                            <em>
                                Fundamentos de Governança de TI (Fundamentos de
                                CobiT e ITIL)
                            </em>
                            .<br />
                            Adquiri entendimento dos principais aspectos e
                            processos básicos que formam o <br />
                            escopo da governança de TI, e do seu impacto sobre a
                            governança <br />
                            corporativa nas organizações.
                        </p>
                        <br />
                    </div>
                    <div className="BtnC">
                        <a href={linkFundacaoBradesco}>VISITAR SITE</a>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default FundacaoBradesco

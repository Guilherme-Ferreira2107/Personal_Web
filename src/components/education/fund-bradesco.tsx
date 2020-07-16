import React from 'react';
import './styles.scss';

const FundacaoBradesco = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <div className="ImgC">
                        <img src="https://www.ev.org.br/Imagens/global/logos/logo-fundacao-bradesco.png" alt="Fundação Bradesco" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="titleC">
                        <h4>Fundamentos de Governança de TI</h4>
                    </div>                    
                    <div className="TextC">
                        <p>Através da Escola Virtual da Fundação Bradesco, obtive com nota máxima a certificação em <br />
                            <em>Fundamentos de Governança de TI (Fundamentos de  CobiT e ITIL)</em>.<br />
                            Adquiri entendimento dos principais aspectos e processos básicos que formam o <br />
                            escopo da governança de TI, e do seu impacto sobre a governança <br />
                            corporativa nas organizações.
                        </p><br />
                    </div>                    
                    <div className="BtnC">
                        <a href="https://www.ev.org.br/">VISITAR SITE</a>
                    </div><br /><br />
                </div>
            </div>
        </div>
    )
}

export default FundacaoBradesco;
import React from 'react';
import './styles.scss';

const Education = () => {
  return (
    <div id="education">
        <div className="container-fluid bg-3">
            <h3 className="margin text-center"><span className="title">EDUCAÇÃO</span></h3><br /><br />
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <img src="https://www.uninter.com/wp-content/themes/scalia/images/uninter/logo-uninter.png" alt="Uninter" />
                    </div>
                    <div className="col-sm-10">
                        <h4>Cursando Análise e Desenvolvimento de Sistemas</h4>
                        <p>Buscando melhorar cada vez mais meu conhecimento, é de enorme importância<br />
                            ter uma formação superior, ainda mais em uma das melhores faculdades de nível internacional, <br />
                            e com nota máxima no MEC. A faculdade disponhe de muitos projetos <br />
                            que complemetarão ainda mais meu conhecimento e experiência.</p><br />
                        <a href="#">VISITAR SITE</a>
                        <br /><br />
                    </div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 img-codecademy">
                        <img src="https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/4391/Codecademy.jpg" alt="Codecademy" />
                    </div>
                    <div className="col-sm-10 text-right">
                        <h4>Reactjs, Javascript, Mysql e NodeJs</h4>
                        <p>Na Codecademy obtive uma boa base de conhecimento sobre programação, graças a sua <br />
                        plataforma interativa online de ensino e sua metodologia inovadora desenvolvi uma <br />
                        boa base de conhecimento e fundamentos.</p><br />
                        <a href="#">VISITAR SITE</a>
                    </div>
                    
                    <br /><br />
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <img src="https://www.ev.org.br/Imagens/global/logos/logo-fundacao-bradesco.png" alt="Fundação Bradesco" />
                    </div>
                    <div className="col-sm-10">
                        <h4>Fundamentos de Governança de TI</h4>
                        <p>Através da Escola Virtual da Fundação Bradesco, obtive com nota máxima a certificação em <br />
                            <em>Fundamentos de Governança de TI (Fundamentos de  CobiT e ITIL)</em>.<br />
                            Adquiri entendimento dos principais aspectos e processos básicos que formam o <br />
                            escopo da governança de TI, e do seu impacto sobre a governança <br />
                            corporativa nas organizações.
                        </p><br />
                        <a href="#">VISITAR SITE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
import React from 'react';
import './styles.scss';

const Contacts = () => {
  return (
    <div id="contacts">
        <div className="container-fluid bg-2">
            <h3 className="margin text-center"><span className="title">CONTATOS</span></h3><br /><br />
            <div className="container">                
                <div className="col-sm-7">
                    <div className="row">
                       <h4>
                        Sou um desenvolvedor criativo, que enxerga além do objetivo proposto,
                        Sempre buscando criar a melhor comunicação com minha equipe.
                        Sei que acabamos de nos conhecer, mas já tenho um bom pressentimento.
                       </h4>
                       <p>
                        Sempre desenvolvendo apps da melhor qualidade para 
                        Web e mobile usando as melhores práticas - 
                        colocando paixão, orgulho e muito esforço em tudo.
                        </p>
                        <p>
                        Obrigado por dar uma olhada nesta humilde página de apresentação, e para me conhecer melhor,
                        entre em contato. Ou melhor ainda, vamos marcar para tomar um café. É por conta da casa!
                       </p>
                    </div>
                </div>
                <div className="col-sm-5 text-right">
                    <h4>Retornarei o contato em até 24 horas.</h4>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p>São Paulo, SP <span className="glyphicon glyphicon-map-marker"></span></p>
                    <p>+55 11 95471-8677 <span className="glyphicon glyphicon-phone"></span></p>
                    <p>guilhermeferreira2107@gmail.com <span className="glyphicon glyphicon-envelope"></span></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contacts;
import React from 'react';
import './styles.scss';

const Contacts = () => {
  return (
    <div id="contacts">
        <div className="container-fluid bg-2">
            <h3 className="margin text-center"><span className="title">CONTATOS</span></h3><br /><br />
            <div className="row">
                <div className="col-sm-5">
                    <h4>Retornarei o contato em até 24 horas.</h4>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> São Paulo, SP</p>
                    <p><span className="glyphicon glyphicon-phone"></span> +55 11 95471-8677</p>
                    <p><span className="glyphicon glyphicon-envelope"></span> guilhermeferreira2107@gmail.com</p>
                </div>
                <div className="col-sm-7 slideanim">
                    <div className="row">            
                        <div className="col-sm-6 form-group">
                            <input className="form-control" id="name" name="name" placeholder="Nome" type="text" required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <input className="form-control" id="email" name="email" placeholder="E-mail" type="email" required />
                        </div>
                    </div>
                    <textarea className="form-control" id="comments" name="comments" placeholder="Mensagem"></textarea><br />
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button className="btn btn-default pull-right" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contacts;
import React from 'react';
import './styles.scss';

import proTrader from '../../assets/images/protrader.png';
import pipToReal from '../../assets/images/pip2real.png';
import ecoleta from '../../assets/images/ecoleta.png';
import virta from '../../assets/images/monitoramentovirta.png';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container-fluid bg-2 text-center">

      <h3><span className="title">PORTFÓLIO</span></h3>
      <br />

        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#home">Projeto 1</a></li>
          <li><a data-toggle="tab" href="#menu1">Projeto 2</a></li>
          <li><a data-toggle="tab" href="#menu2">Projeto 3</a></li>
          <li><a data-toggle="tab" href="#menu3">Projeto 4</a></li>
        </ul>

        <div className="tab-content text-left">
          <div id="home" className="tab-pane fade in active">
            <div className="box row">
              <div className="col-sm-2">
                <img src={proTrader} alt="PRO TRADER INVESTING"/><br />
              </div>
              <div className="col-sm-10">
                <h4>PRO TRADER INVESTING</h4><br />
                <p>Aplicação web que gerencia e realiza rápidos cálculos para 
                investidores do mercado financeiro da modalidade Opções Binárias.
                </p><br />
                <a href="https://github.com/Guilherme-Ferreira2107/ProTraderInvesting">VER REPOSITÓRIO</a>
              </div>
            </div>
          </div>
          
          <div id="menu1" className="tab-pane fade">
            <div className="box row">
              <div className="col-sm-2">
                <img src={pipToReal} alt="CONVERSOR DE PIP EM REAL"/><br />
              </div>
              <div className="col-sm-10">
                <h4>CONVERSOR DE PIP EM REAL</h4><br />
                <p>Aplicação web que converte pontos/pips em reais. O conversor de valor de pips, 
                  ajuda a monitorizar o seu risco por operação (trade) de uma forma mais exata.
                </p><br />
                <a href="https://github.com/Guilherme-Ferreira2107/ConverterPipsInReal">VER REPOSITÓRIO</a>
              </div>
            </div>
          </div>
          
          <div id="menu2" className="tab-pane fade">
            <div className="box row">
              <div className="col-sm-2">
                <img src={ecoleta} alt="ECOLETA"/> <br />
              </div>
              <div className="col-sm-10">
                <h4>ECOLETA</h4><br />
                <p>O projeto tem o intuito de conectar pessoas com empresas que coletam resíduos 
                  específicos como: Baterias, Lâmpadas, Pilhas, óleo de cozinha, etc.
                </p><br />
                <a href="https://github.com/Guilherme-Ferreira2107/NextLevelWeek_01/">VER REPOSITÓRIO</a>
              </div>
            </div>
          </div>
          
          <div id="menu3" className="tab-pane fade">
            <div className="box row">
              <div className="col-sm-2">
                <img src={virta} alt="MONITORAMENTO VIRTA"/> <br />
              </div>
              <div className="col-sm-10">
                <h4>MONITORAMENTO VIRTA</h4><br />
                <p>Aplicativo mobile para monitoramento de notícias em tempo real. 
                  Notificação de notícia.
                  Visualização de imagens, áudios e vídeos.
                  Compartilhamento de notícia.
                  Favoritar notícias.
                  Busca por palavra, editoria e data.
                  Criação de gráficos baseado no histórico de notícias.
                </p><br />
                <a href="https://play.google.com/store/apps/details?id=br.com.grupovirta.monitoramento">VISITAR PÁGINA</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
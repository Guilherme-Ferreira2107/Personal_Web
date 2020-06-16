import React from 'react';
import './styles.scss';

const Experience = () => {
  return (
    <div id="experience">
        <div className="container-fluid bg-4">
            <h3 className="margin text-center">
            <span className="title">EXPERIÊNCIAS</span></h3><br /><br />
            <div className="row">
              <main>
                <div className="timeLine">
                  <h4>Virta Comunicação</h4>
                  <p><em>Janeiro de 2017 - Até o momento - 3 anos e 6 meses</em></p>
                  <p>Atuação como desenvolvedor Front-end e Back-end em sistemas internos utilizando
                    Java e Mysql.
                    Desenvolvimento de websites utilizando HTML5/CSS3, Javascript e Bootstrap.
                    Desenvolvimento de aplicativo mobile, atuação no front-end utilizando React Native.
                    Utilização de metodologia ágil SCRUM e controle de versão em GIT.
                  </p>
                </div>
                <div className="timeLine">
                  <h4 className="two">Multigeo Mineração Geologia e Meio Ambiente</h4>
                  <p className="two"><em>penúltimo cargo - 5 anos e 2 meses</em></p>
                  <p>Atuação com gerenciamento e manutenção de computadores e impressoras. Configurações e
                    gerenciamentos de e-mails e softwares. Execução de backups, depuração de bugs, 
                    otimização de recursos e sistemas, execução de diagnóstico e solução de problemas. 
                    Geração de relatórios, manutenção de redes e configuração de roteadores.
                  </p>
                </div>
              </main>
            </div>
        </div>
    </div>
  );
}

export default Experience;
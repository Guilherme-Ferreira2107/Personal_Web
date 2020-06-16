import React from 'react';
import './styles.scss';

//import perfil from '../../images/perfil2.jpg';

const About = () => {
  return (
    <div id="about">
      <div className="container-fluid bg-2 text-center">
        <div className="row">
          <div className="text-center">
            <h4>"Olá, me chamo Guilherme, e desde 2017 venho estudando e aplicando todo o meu conhecimento
            em desenvolvimento web e <i>mobile</i>. <br />
            Trago comigo não apenas experiência, mas também a paixão por cada linha de código digitado!"
            </h4><br />
          </div>
          <div className="col-sm-9 text-center">
            <h4 className="text-right"><em>Codar é simplesmente minha paixão!</em></h4><br />
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <p>"Since 2017 studying and applying all knowledge in web and mobile development, <br />
              I bring with me not only the experience but the passion for each line of code typed!"
            <br /><em>Codar is simply my passion</em>
            </p>
          </div> 
        </div>

      </div>
    </div>
        


  );
}

export default About;
import React from 'react';
import './styles.scss';

import iconReact from '../../assets/icons-react.svg';
import iconNode from '../../assets/icons-nodejs.svg';
import iconSass from '../../assets/icons-sass.png';
import iconMysql from '../../assets/icons-mysql.png';
import iconTypescript from '../../assets/icons-typescript.svg';
import iconMongo from '../../assets/icons-mongo.png';

const Skills = () => {
  return (
    <div id="skills" >
      <div className="container-fluid bg-2 text-center">
        <h3><span className="title">HABILIDADES</span></h3>
        <br />
        <div className="row slideanim">
          <div className="col-sm-4">
            <img src={iconReact} alt="React.js/React Native" />
            <h5>REACTJS &amp; REACT NATIVE</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
          </div>
          <div className="col-sm-4">
            <img src={iconNode} alt="Node.js" />
            <h5>NODEJS</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
          </div>
          <div className="col-sm-4">
            <img src={iconMysql} alt="Mysql" /> 
            <h5>MYSQL</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
          </div>
        </div>
        <br /><br />
        <div className="row slideanim">
          <div className="col-sm-4">
            <img src={iconTypescript} alt="Typescript"/>
            <h5>TYPESCRIPT</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
            <span className="glyphicon glyphicon-star-emply logo-small"></span>
          </div>
          <div className="col-sm-4">
            <img src={iconMongo} alt="MongoDB"/>
            <h5>MONGODB</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
          </div>
          <div className="col-sm-4">
            <img src={iconSass}  alt="CSS3/SCSS"/>
            <h5>CSS3 &amp; SCSS</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
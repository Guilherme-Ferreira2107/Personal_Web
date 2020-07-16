import React from 'react';
import './styles.scss';

import iconMysql from '../../assets/icons/icons-mysql.png';

const Mysql = () => {
    return (
        <>
            <img src={iconMysql} alt="Mysql" /> 
            <h5>MYSQL</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
        </>
    )
}

export default Mysql;
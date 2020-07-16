import React from 'react';
import './styles.scss';

import iconMongo from '../../assets/icons/icons-mongo.png';

const MongoDB = () => {
    return (
        <>
            <img src={iconMongo} alt="MongoDB"/>
            <h5>MONGODB</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
        </>
    )
}

export default MongoDB;
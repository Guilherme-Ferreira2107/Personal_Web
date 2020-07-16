import React from 'react';
import './styles.scss';

import iconNode from '../../assets/icons/icons-nodejs.svg';

const Node = () => {
    return (
        <>
            <img src={iconNode} alt="Node.js" />
            <h5>NODEJS</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
        </>
    )
}

export default Node;
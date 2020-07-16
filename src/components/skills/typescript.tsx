import React from 'react';
import './styles.scss';

import iconTypescript from '../../assets/icons/icons-typescript.svg';

const Typescript = () => {
    return (
        <>
            <img src={iconTypescript} alt="Typescript"/>
            <h5>TYPESCRIPT</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star-empty logo-small"></span>
            <span className="glyphicon glyphicon-star-emply logo-small"></span>
        </>
    )
}

export default Typescript;
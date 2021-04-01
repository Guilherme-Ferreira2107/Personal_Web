import React from 'react'
import './styles.scss'

import iconReact from '../../assets/icons/icons-react.svg'

const RN = (props: { title: any }) => {
    const { title } = props
    return (
        <>
            <img
                src={iconReact}
                className={title === 'REACT NATIVE' ? 'rn' : ''}
                alt="React.js/React Native"
            />
            <h5>{title}</h5>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
            <span className="glyphicon glyphicon-star logo-small"></span>
        </>
    )
}

export default RN

import React from 'react';
import '../styles/button.css'

const Button = (props) => {
    const { value, onclick } = props;
    return (
        <button className="button" onClick={onclick} >{value}</button>
    )
}

export default Button;
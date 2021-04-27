import React from 'react';

const Input = (props) => {
    const { type, className, value, placeholder, onClick } = props;

    return <input type={type} className={className} value={value} placeholder={placeholder} onClick={onClick} />
}

export default Input;

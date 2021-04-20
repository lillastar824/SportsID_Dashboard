import React from 'react';

const P = (props) => {
    const { className, children} = props;

    return <p className={className}>{children}</p>
}
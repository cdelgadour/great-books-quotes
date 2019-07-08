import React from 'react';
import './Button.scss'

const Button = props => {
    return (<button onClick={() => props.clicked(props.bookTitle)}>{props.bookTitle}</button>)
};

export default Button;

import React from 'react';
import classes from './Button.module.css'

const AnswerButton = props => {
    return (<button className={classes.Button} onClick={() => props.clicked(props.bookTitle)}>{props.bookTitle}</button>)
};

export default AnswerButton;

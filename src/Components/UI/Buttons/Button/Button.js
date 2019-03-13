import React from 'react';

const AnswerButton = props => {
    return (<button onClick={() => props.clicked(props.bookTitle)}>{props.bookTitle}</button>)
};

export default AnswerButton;

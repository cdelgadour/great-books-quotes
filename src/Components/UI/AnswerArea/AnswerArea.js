import React from 'react';
import Button from './Button/Button'
import classes from './AnswerArea.module.css'
import BookInfo from '../../BookInfo/BookInfo'

const AnswerArea = props => {
    let buttons = (<div>
        {props.titles.map( (title, i) => <Button bookTitle={title} key={i} clicked={props.checkAnswer}></Button> )}
    </div>);

    if (props.correct) {
        buttons = (<BookInfo bookTitle={props.bookTitle}
                             authorName={props.authorName}
                             correct={props.correct}
                             nextTitle={props.nextTitle}/>);
    }

    return (<div className={classes.AnswerArea}>
        {buttons}
    </div>)
};

export default AnswerArea;

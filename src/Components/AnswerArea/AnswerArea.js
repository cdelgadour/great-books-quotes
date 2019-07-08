import React from 'react';
import Button from './Button/Button'
import './AnswerArea.scss'
import BookInfo from '../BookInfo/BookInfo'

const AnswerArea = props => {
    let content = props.titles.map( (title, i) => <Button bookTitle={title} key={i} clicked={props.checkAnswer}></Button> )

    if (props.correct) {
        content = (<BookInfo bookTitle={props.bookTitle}
                             authorName={props.authorName}
                             correct={props.correct}
                             nextTitle={props.nextTitle}/>);
    }

    return (<div className="AnswerArea">
        {content}
    </div>)
};

export default AnswerArea;

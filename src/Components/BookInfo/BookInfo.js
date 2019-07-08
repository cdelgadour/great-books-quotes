import React from 'react';
import './BookInfo.scss'


const BookInfo = (props) => {
    let assignedClasses = ['BookInfo','Incorrect'].join(' ') ;
    if (props.correct) {
        assignedClasses = ['BookInfo', 'Correct'].join(' ');
    }

    return (<div className={assignedClasses}>
            <h3>Correct!</h3>
            <h3><em>{props.bookTitle}</em> by {props.authorName}</h3>
            <button onClick={props.nextTitle}>Next</button>
        </div>);
};

export default BookInfo;

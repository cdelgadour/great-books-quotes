import React from 'react';
import classes from './BookInfo.module.css'

const BookInfo = (props) => {
    let assignedClasses = [classes.BookInfo,classes.Incorrect].join(' ') ;
    if (props.correct) {
        assignedClasses = [classes.BookInfo, classes.Correct].join(' ');
    }

    return (<div className={assignedClasses}>
            <h3>Correct!</h3>
            <h3><em>{props.bookTitle}</em> by {props.authorName}</h3>
            <button onClick={props.nextTitle}>Next</button>
        </div>);
};

export default BookInfo;
/*

import React from 'react';
import classes from './BookInfo.module.css'

const BookInfo = (props) => {
    let bookInfo = '';

    if (props.correct) {
        bookInfo = (<div className={classes.BookInfo}>
            <h3>Correct!</h3>
            <h3><em>{props.bookTitle}</em> by {props.authorName}</h3>
            <button onClick={props.nextTitle}>Next</button>
        </div>);
    }
    return(<div>
        {bookInfo}
    </div>)
};

export default BookInfo;
*/

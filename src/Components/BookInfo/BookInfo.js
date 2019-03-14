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
    } else if (props.correct === false) {
        bookInfo = (<h3 style={{margin: 0,
                            fontSize: '1.7em',
                            textAlign: 'center'}}>Wrong answer!</h3>);
    }
  return(<div>
      {bookInfo}
  </div>)
};

export default BookInfo;

import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import classes from './BookInfo.module.css'

const BookInfo = (props) => {
    let bookInfo = '';

    if (props.correct) {
        bookInfo = (<div className={classes.BookInfo}>
            <h2>Correct!</h2>
            <h3><em>{props.bookTitle}</em> by {props.authorName}</h3>
            <button onClick={props.nextTitle}>Next</button>
        </div>);
    } else if (props.correct === false) {
        bookInfo = (<p style={{margin: 0,
                            fontSize: '2em',
                            textAlign: 'center'}}>Wrong answer!</p>);
    }
  return(<Aux>
      {bookInfo}
  </Aux>)
};

export default BookInfo;

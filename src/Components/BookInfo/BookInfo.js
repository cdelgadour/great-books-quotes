import React from 'react';
import Aux from '../../hoc/Aux/Aux'

const BookInfo = (props) => {
    let bookInfo = '';

    if (props.correct) {
        bookInfo = (<div>
            <p>Correct!</p>
            <p><em>{props.bookTitle}</em> by {props.authorName}</p>
            <button onClick={props.nextTitleHandler}>Next</button>
        </div>);
    } else if (props.correct === false) {
        bookInfo = (<p>Wrong answer!</p>);
    }
  return(<Aux>
      {bookInfo}
  </Aux>)
};

export default BookInfo;

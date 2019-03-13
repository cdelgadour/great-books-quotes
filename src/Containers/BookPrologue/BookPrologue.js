import React, { Component } from 'react';
import FullText from '../../Components/FullText/FullText'
import BookInfo from '../../Components/BookInfo/BookInfo'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Buttons from '../../Components/UI/Buttons/Buttons'

import classes from './BookPrologue.module.css'

class BookPrologue extends Component {
    state = {
        bookInfo: {...this.props.correct},
        list: this.props.bookList,
        answered: null
    };

    answerHandler = (title) => {
        if (this.state.bookInfo.bookTitle === title) this.setState({answered: true})
        else this.setState({answered: false});
    };

    nextTitleHandler = () => {
        this.setState({
            bookInfo: {...this.props.correct},
            list: this.props.bookList,
            answered: null
        });
    };

    render() {
        return (<div className={classes.BookPrologue}>
            <Toolbar/>
            <div style={{textAlign: 'center', display: 'inline-block'}}>
                <FullText text={this.state.bookInfo.text}/>
                <BookInfo bookTitle={this.state.bookInfo.bookTitle}
                            authorName={this.state.bookInfo.author}
                            correct={this.state.answered}
                            nextTitle={this.nextTitleHandler}/>
            </div>
            <Buttons titles={this.state.list} checkAnswer={this.answerHandler}></Buttons>
        </div>)
    }
}

export default BookPrologue;

import React, { Component } from 'react';
import FullText from '../../Components/FullText/FullText'
//import BookInfo from '../../Components/BookInfo/BookInfo'
import AnswerArea from '../../Components/AnswerArea/AnswerArea'
import classes from './BookPrologue.module.css'

class BookPrologue extends Component {
    state = {
        ...this.props.turnData(),
        answered: null,
        openMenu: false};

    answerHandler = (title) => {
        if (this.state.bookInfo.bookTitle === title) this.setState({answered: true});
        else this.setState({answered: false});
    };

    componentDidUpdate() {
    }

    componentDidMount() {
    }

    nextTitleHandler = () => {
       const turnData = {...this.props.turnData()};
       this.setState({
           ...turnData,
           answered: null
       })
    };

    render() {
        return (<div className={classes.BookPrologue}>
            <div className={[classes.BookPrologue, classes.FullText].join(' ')}>
                <FullText text={this.state.bookInfo.text}/>
            </div>
            <AnswerArea titles={this.state.bookList}
                        checkAnswer={this.answerHandler}
                        display={this.state.answered}
                        bookTitle={this.state.bookInfo.bookTitle}
                        authorName={this.state.bookInfo.author}
                        correct={this.state.answered}
                        nextTitle={this.nextTitleHandler}>
            </AnswerArea>
        </div>)
    }
}

export default BookPrologue;

import React, { Component } from 'react';
//import BookInfo from '../../Components/BookInfo/BookInfo'
import AnswerArea from '../../Components/AnswerArea/AnswerArea'
import './BookQuotes.scss'

class BookQuotes extends Component {
    state = {
        ...this.props.turnData(),
        answered: null,
        openMenu: false,
        wrongAnswersIDs: []
    };

    answerHandler = title => {
        if (this.state.bookInfo.bookTitle === title) this.setState({
            answered: true,
            wrongAnswersIDs: []
        });
        else this.setState(prevState => ({
            answered: false,
            wrongAnswersIDs: prevState.wrongAnswersIDs.concat(title)
        }));
    };

    nextTitleHandler = () => {
       const turnData = {...this.props.turnData()};
       this.setState({
           ...turnData,
           answered: null
       })
    };

    render() {
        return (<div className="BookQuotes">
            <div className="Quote-Body">
                {this.state.bookInfo.text}
            </div>
            <AnswerArea titles={this.state.bookList}
                        checkAnswer={this.answerHandler}
                        display={this.state.answered}
                        bookTitle={this.state.bookInfo.bookTitle}
                        authorName={this.state.bookInfo.author}
                        correct={this.state.answered}
                        nextTitle={this.nextTitleHandler}
                        wrongAnswers={this.state.wrongAnswersIDs}>
            </AnswerArea>
        </div>)
    }
}

export default BookQuotes;

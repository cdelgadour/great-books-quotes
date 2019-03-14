import React, { Component } from 'react';
import FullText from '../../Components/FullText/FullText'
import BookInfo from '../../Components/BookInfo/BookInfo'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Sidedrawer from '../../Components/SideDrawer/Sidedrawer'
import Buttons from '../../Components/UI/Buttons/Buttons'

import classes from './BookPrologue.module.css'

class BookPrologue extends Component {
    state = {
        ...this.props.turnData(),
        answered: null};

    answerHandler = (title) => {
        if (this.state.bookInfo.bookTitle === title) this.setState({answered: true});
        else this.setState({answered: false});
    };

    nextTitleHandler = () => {
       const turnData = {...this.props.turnData()};
       this.setState({
           ...turnData,
           answered: null
       })
    };

    render() {
        return (<div className={classes.BookPrologue}>

            <Toolbar/>
            <div className={[classes.BookPrologue, classes.FullText].join(' ')}>
                <FullText text={this.state.bookInfo.text}/>
                <BookInfo bookTitle={this.state.bookInfo.bookTitle}
                            authorName={this.state.bookInfo.author}
                            correct={this.state.answered}
                            nextTitle={this.nextTitleHandler}/>
            </div>
            <Buttons titles={this.state.bookList} checkAnswer={this.answerHandler} display={this.state.answered}></Buttons>
        </div>)
    }
}

export default BookPrologue;

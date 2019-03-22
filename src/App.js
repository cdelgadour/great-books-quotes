import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import BookPrologue from './Containers/BookPrologue/BookPrologue'
import Layout from './hoc/Layout/Layout'
import './App.css';
import axios from './axios-add';
import AddQuote from './Containers/addQuote/addQuote'

//TODO: Add html height
//TODO: Have to expand #root to height: 100%

const shuffle = (arr) => {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
};

class App extends Component {
    state = {
        loaded: false
    };
    componentDidMount() {
        axios.get('/authors/-LaXx5hXMY-QQ9yn9rSv.json')
            .then(response => {
                this.setState({quotes: response.data, loaded: true});
            })
            .catch(e => console.log(e));
    }

    getTurnData = () => {
        let booksArray = [];
        let bookInfo;
        for (let book of this.state.quotes) {
            booksArray.push(book.bookTitle);
        }

        booksArray = shuffle(booksArray).splice(0, 4);
        let correct = booksArray[Math.floor(Math.random() * booksArray.length)];

        for (let book of this.state.quotes) {
            if (book.bookTitle === correct) bookInfo = {...book};
        }

        return {
            bookInfo: {...bookInfo},
            bookList: booksArray
        }
    };
  render() {
      let bookPrologue = null;
      if (this.state.loaded) {
          bookPrologue = <Route path="/" exact render={(matchProps) => <BookPrologue turnData={this.getTurnData} {...matchProps}/>}/>;
      }
    return (
          <Layout>
              {bookPrologue}
              <Route path='/test' component={AddQuote}/>
          </Layout>
    );
  }
}

export default App;

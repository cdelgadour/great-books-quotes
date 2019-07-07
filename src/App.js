import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import BookPrologue from './Containers/BookQuotes/BookPrologue'
import Layout from './hoc/Layout/Layout'
import './App.css';
import axios from './axios-add';
import AddQuote from './Containers/addQuote/addQuote'
import Spinner from './Components/UI/Spinner/Spinner'

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
        this.getDataFromDB();
    }

    getDataFromDB = () => {
        axios.get('/authors/-LaXx5hXMY-QQ9yn9rSv.json')
            .then(response => {
                let data = response.data;
                this.setState({quotes: data, loaded: true});
            })
            .catch(e => console.log(e));
    };

    addQuoteHandler = (data) => {
        axios.post('/authors/-LaXx5hXMY-QQ9yn9rSv.json', data)
            .then(() => this.getDataFromDB())
            .catch(e => console.log(e));
    };

    getTurnData = () => {
        let booksArray = [];
        let bookInfo;
        let allQuotes = {...this.state.quotes};
        for (let book in allQuotes) {
            booksArray.push(allQuotes[book].bookTitle);
        }

        booksArray = shuffle(booksArray).splice(0, 4);
        let correct = booksArray[Math.floor(Math.random() * booksArray.length)];

        for (let book in allQuotes) {
            if (allQuotes[book].bookTitle === correct) bookInfo = {...allQuotes[book]};
        }

        return {
            bookInfo: {...bookInfo},
            bookList: booksArray
        }
    };
  render() {
      let bookPrologue = <Spinner/>;
     if (this.state.loaded) {
          bookPrologue = <Route path="/" exact render={(matchProps) => <BookPrologue turnData={this.getTurnData} {...matchProps}/>}/>;
      }
    return (
          <Layout>
              {bookPrologue}
              <Route path='/add-quote' render={ (matchProps) => <AddQuote updateQuotes={this.addQuoteHandler} {...matchProps}/>}/>
          </Layout>
    );
  }
}

export default App;

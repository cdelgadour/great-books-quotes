import React, { Component } from 'react';
import BookPrologue from './Containers/BookPrologue/BookPrologue'
import './App.css';

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

let books = [
    {
        author: 'Charles Dickens',
        text: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief ' +
            ', it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair...',
        bookTitle: 'A Tale of Two Cities'
    },
    {
        author: 'Fyodor Dostoevsky',
        text: 'I am a sick man... I am a spiteful man. I am an unpleasant man. I think my liver is diseased. However, I don\'t know beans ' +
            'about my disease, and I am not sure what is bothering me. I don\'t treat it and never have, though I respect medicine and doctors.',
        bookTitle: 'Notes from the Underground'
    },
    {
        author:'Friedrich Nietzsche',
        text: 'We are unknown to ourselves, we knowers: and with good reason. We have never looked for ourselves, – so how are we ever supposed ' +
            'to find ourselves? How right is the saying: \'Where your treasure is, there will your heart be also\'; our treasure is where ' +
            'the hives of our knowledge are.',
        bookTitle: 'Genealogy of Morals'
    },
    {
        author: 'Gabriel García Márquez',
        text: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.',
        bookTitle: 'One Hundred Years of Solitude'
    },
    {
        author: 'Charles Dickens',
        text: 'Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.',
        bookTitle: 'David Copperfield'
    },
    {
        author: 'Leo Tolstoy',
        text: 'All happy families are alike; each unhappy family is unhappy in its own way.',
        bookTitle: 'Anna Karenina'
    },
];


class App extends Component {
    getTurnData = () => {
        let booksArray = [];
        let bookInfo;
        for (let book of books) {
            booksArray.push(book.bookTitle);
        }
        booksArray = shuffle(booksArray).splice(0, 4);
        let correct = booksArray[Math.floor(Math.random() * booksArray.length)];
        books.forEach(book => {
                if (book.bookTitle === correct) bookInfo = {...book};
            }
        );

        return {
            bookInfo: {...bookInfo},
            bookList: booksArray
        }
    };
  render() {
    return (
      <div className="App">
          <BookPrologue  turnData={this.getTurnData}/>
      </div>
    );
  }
}

export default App;

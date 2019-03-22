import React, { Component } from 'react';
import classes from './addQuote.module.css'

class addQuote extends Component {
    render() {
        console.log(this.props);
        return (<div style={{textAlign: 'center'}}>
            <h2>Add a famous opening quote!</h2>
            <form action="" className={classes.form}>
                <div>Book name: <br/><input type="text" name="bookName"/></div>
                <div>Book author: <br/><input type="text" name="bookAuth"/></div>
                <div>Book quote: <br/><textarea style={{width: '75%', height:'100px'}}type="text" name="bookQuote"/></div>
                <button onClick={(e) => e.preventDefault()}>Add!</button>
                <button onClick={(e) => e.preventDefault()}>Cancel</button>
            </form>
        </div>)
    }
}

export default addQuote;

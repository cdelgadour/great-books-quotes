import React, { Component } from 'react';
import BasicForm from '../../Components/Form/Form'
import './AddQuote.scss'

class addQuote extends Component {
    state = {
        author: '',
        bookTitle: '',
        text: ''
    };

    formStateUpdate = e => {
        this.setState({[e.target.name]:e.target.value});
    };

    sendForm = e => {
        e.preventDefault();
        let newData = {...this.state};
        this.props.updateQuotes(newData);
        this.props.history.replace('/');
    };

    cancelHandler = (e) => {
        this.props.history.goBack();
        e.preventDefault();
    };
    render() {
        return (<div style={{textAlign: 'center', color: '#58442d'}}>
            <BasicForm/>
            <h2>Add a book quote!</h2>
            <form action="" className="form">
                <div>
                    <input type="text"
                           name="bookTitle"
                           value={this.state.bookTitle}
                           onChange={this.formStateUpdate}
                           placeholder="Book name"/>
                </div>
                <div>
                    <input type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.formStateUpdate}
                    placeholder="Book author"/></div>
                <div>
                    <textarea style={{width: '75%', height:'100px'}}
                              type="text"
                              name="text"
                              value={this.state.text}
                              onChange={this.formStateUpdate}
                              placeholder="Add a quote"/>
                </div>
                <button onClick={this.sendForm}>Add!</button>
                <button onClick={this.cancelHandler}>Back</button>
            </form>
        </div>)
    }
}

export default addQuote;

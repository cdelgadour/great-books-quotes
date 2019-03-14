import React from 'react';
import Button from './Button/Button'
import classes from './Buttons.module.css'

const Buttons = props => {
    let buttons = '';
    if (!props.display) {
        buttons = (<div className={classes.Buttons}>
            {props.titles.map( (title, i) => <Button bookTitle={title} key={i} clicked={props.checkAnswer}></Button> )}
        </div>);
    }


    return buttons
};

export default Buttons;

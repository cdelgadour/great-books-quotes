import React from 'react';
import Button from './Button/Button'
import classes from './Buttons.module.css'

const Buttons = props => {
    let buttons = (<div className={classes.Buttons}>
        {props.titles.map( (title, i) => <Button bookTitle={title} key={i} clicked={props.checkAnswer}></Button> )}
    </div>);

    if (2 + 2 === 1) buttons = <Button clicked={() => console.log('Hello')} author='Hi'></Button>

    return buttons
};

export default Buttons;

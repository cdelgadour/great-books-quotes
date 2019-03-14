import React from 'react';
import classes from './FullText.module.css'

const FullText = (props) => {
    return (<div>
        <p className={classes.FullText}>{props.text}</p>
    </div>)
};

export default FullText;

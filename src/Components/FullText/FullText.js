import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './FullText.module.css'

const FullText = (props) => {
    return (<Aux>
        <p className={classes.FullText}>{props.text}</p>
    </Aux>)
};

export default FullText;

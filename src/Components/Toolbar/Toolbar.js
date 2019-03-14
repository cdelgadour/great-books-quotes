import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <h1>Great Books' Prologues</h1>
           {/* <nav>
                <a href="/">Add a prologue!</a>
            </nav>*/}
        </header>);
};

export default Toolbar;

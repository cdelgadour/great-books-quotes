import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle open={props.clicked}/>
            <h1>Great Books' Prologues</h1>
        </header>);
};

export default Toolbar;

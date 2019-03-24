import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavItems from './NavItems/NavItems'

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle open={props.clicked}/>
            <h1 className={classes.Title}>Great Books' Prologues</h1>
            <NavItems/>
        </header>);
};

export default Toolbar;

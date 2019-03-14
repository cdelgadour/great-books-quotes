import React from 'react'
import classes from './Sidedrawer.module.css'

const SideDrawer = () => {
    return(<div className={classes.Sidedrawer}>
        <h3>Menu</h3>
        <a href="/">Add a prologue!</a>
        <h3 style={{bottom: 0}}>Close</h3>
    </div>)
};

export default SideDrawer;

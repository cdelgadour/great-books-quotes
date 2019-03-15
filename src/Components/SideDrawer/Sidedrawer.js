import React from 'react'
import classes from './Sidedrawer.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Closed];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open} close={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <h2>Menu</h2>
                <a href="/">Add a prologue!</a>
                <h2 style={{bottom: 0}}>Close</h2>
            </div>
        </div>)
};

export default SideDrawer;

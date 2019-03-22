import React from 'react'
import classes from './Sidedrawer.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import {Link, withRouter} from 'react-router-dom';

const SideDrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Closed];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    console.log(props);

    let clicked = () => {};

    return (
        <div>
            <Backdrop show={props.open} close={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <h2>Menu</h2>
                <Link to='/test' style={{color: 'red'}}>Add a prologue</Link>
                <h2 style={{bottom: 0}}>Close</h2>
            </div>
        </div>)
};

export default withRouter(SideDrawer);

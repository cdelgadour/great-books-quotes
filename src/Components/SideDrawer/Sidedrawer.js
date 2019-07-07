import React from 'react'
import classes from './Sidedrawer.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import {Link, withRouter} from 'react-router-dom';

const SideDrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Closed];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    let linked = () => {
        props.clicked();
        props.history.push('/');
    };

    return (
        <div>
            <Backdrop show={props.open} close={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <h2>Menu</h2>
                <Link to='/add-quote'
                      style={{textDecoration:'none'}}
                      onClick={linked}>Add a quote!</Link>
                <Link to=''
                      onClick={props.clicked}
                      style={{display:'block', textDecoration:'none'}}>Close</Link>
            </div>
        </div>)
};

export default withRouter(SideDrawer);

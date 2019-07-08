import React from 'react'
import './Sidedrawer.scss'
import Backdrop from '../UI/Backdrop/Backdrop'
import NavItem from '../Toolbar/NavItems/NavItem'
import {withRouter} from 'react-router-dom';

const SideDrawer = (props) => {
    let attachedClasses = ['Sidedrawer'];
    if (props.open) {
        attachedClasses = ['Sidedrawer', 'Open'];
    }
    
    return (
        <div>
            <Backdrop show={props.open} close={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <h2 className="close" onClick={props.clicked}>&times;</h2>
                <ul className="NavItems">
                    <NavItem path="/">Home</NavItem>
                    <NavItem path="/add-quote">Add a quote!</NavItem>
                </ul>
            </div>
        </div>)
};

export default withRouter(SideDrawer);

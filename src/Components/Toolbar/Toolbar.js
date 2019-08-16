import React from 'react';
import './Toolbar.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavItem from './NavItems/NavItem'

const Toolbar = props => {
    return (
        <header className="Toolbar">
            <DrawerToggle open={props.clicked}/>
            <h1 className="Title">Book Quotes</h1>
            <ul className="navItems">
                <NavItem path="/">Home</NavItem>
                <NavItem path="/add-quote">Add Quote!</NavItem>
            </ul>
        </header>)
};

export default Toolbar;

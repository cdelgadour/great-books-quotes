import React from 'react';
import './Toolbar.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavItems from './NavItems/NavItem'

const Toolbar = props => {
    return (
        <header className="Toolbar">
            <DrawerToggle open={props.clicked}/>
            <h1 className="Title">Book Quotes</h1>
            <NavItems/>
        </header>)
};

export default Toolbar;

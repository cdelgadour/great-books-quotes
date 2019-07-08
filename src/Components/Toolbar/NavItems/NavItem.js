import React from 'react';
import './NavItem.scss'
import { Link } from 'react-router-dom';

const NavItem = props => {
    return(props.children ? <li className='NavItem'>
        <Link to={props.path} onClick={props.clicked}>
            {props.children}
        </Link>
    </li> : null );
};

export default NavItem;

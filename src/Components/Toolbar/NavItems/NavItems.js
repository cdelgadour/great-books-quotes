import React from 'react';
import classes from './NavItems.module.css'
import {Link} from 'react-router-dom';

const navItems = () => {
    return(<ul className={classes.NavItems}>
        <li>
            <Link to='/add-quote' className={classes.item}>Add quote</Link>
        </li>
    </ul>)
};

export default navItems;

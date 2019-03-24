import React from 'react';
import classes from './NavItems.module.css'
import {Link} from 'react-router-dom';

const navItems = () => {
    return(<ul className={classes.NavItems}>
        <Link to='test' className={classes.item}>Add quote</Link>
    </ul>)
};

export default navItems;

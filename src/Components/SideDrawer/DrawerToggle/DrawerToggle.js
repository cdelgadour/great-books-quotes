import React from 'react';
import './DrawerToggle.scss';

const drawerToggle = (props) => {
    return (<div className="DrawerToggle" onClick={props.open}>
        <div></div>
        <div></div>
        <div></div>
    </div>)
};

export default drawerToggle;

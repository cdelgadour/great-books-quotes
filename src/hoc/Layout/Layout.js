import React, { Component } from 'react'
import SideDrawer from "../../Components/SideDrawer/Sidedrawer";
import Toolbar from '../../Components/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        openDrawer: false
    };

    toggleSidedrawer = () => {
        this.setState(prevState => ({
            openDrawer: !prevState.openDrawer
        }))
    };

  render() {
      return (<div className={classes.Layout}>
          <SideDrawer open={this.state.openDrawer} clicked={this.toggleSidedrawer}/>
          <Toolbar clicked={this.toggleSidedrawer}/>
          {this.props.children}
      </div>)
  }
};

export default Layout;

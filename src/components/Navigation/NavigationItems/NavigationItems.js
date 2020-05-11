
import React from 'react'

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
// A <ul> is basically a <div> tag but reserved for, well, <ul>
    <ul className={classes.NavigationItems}>

        {/* the "Burger Build" and "Checkout" passed in will represent the 
        "{props.children}" of <NavigationItem></NavigationItem> */}
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        {!props.isAuthenticated 
            ? <NavigationItem link="/auth" >Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}

    </ul>
);

export default navigationItems;

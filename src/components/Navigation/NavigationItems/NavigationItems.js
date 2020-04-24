
import React from 'react'

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
// A <ul> is basically a <div> tag but reserved for, well, <ul>
    <ul className={classes.NavigationItems}>

        {/* the "Burger Build" and "Checkout" passed in will represent the 
        "{props.children}" of <NavigationItem></NavigationItem> */}
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>

    </ul>
);

export default navigationItems;
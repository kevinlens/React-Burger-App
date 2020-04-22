import React from 'react'

import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems';

//AKA TOP UPPER BAR WITH ITEMS AND EVERYTHING
const toolbar = (props) => (
    // A header is basically a <div> tag but reserved for, well, header
    <header className={classes.Toolbar}>

        <div>MENU</div>

    <div className={classes.Logo}>
        <Logo />
    </div>

        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>

);
export default toolbar;
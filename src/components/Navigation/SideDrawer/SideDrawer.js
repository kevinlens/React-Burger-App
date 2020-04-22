import React from 'react'

import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './SideDrawer.module.css'

import Backdrop from '../../UI/Backdrop/Backdrop'

import Aux from '../../../hoc/Auxiliary'

//AKA the SideMenu
const sideDrawer = (props) =>{
    
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <Aux>
            
        {/* props data from Layout.js */}
        <Backdrop show={props.open} clicked={props.closed}/>


    {/* 
         here you want to customize the sideMenu so you wrap it in a div,
         however you cant have the <Backdrop /> be a part of it so you 
         will need an <Aux> wrapper with <Backdrop /> all on its own   */}
        <div className={attachedClasses.join(' ')}>
        
        <div className={classes.Logo}>
            <Logo />
        </div>   

        <nav>
            <NavigationItems />
        </nav>

        </div>


        </Aux>
    );
}

export default sideDrawer;
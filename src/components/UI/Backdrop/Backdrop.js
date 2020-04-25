import React from 'react'

import classes from './Backdrop.module.css';

//Stateless component aka (BackgroundMenuCancel)
const backdrop = (props) => (
    // if show is true, meaning it exist then print out the element
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
import React from 'react'

import classes from './Button.module.css'

const button = (props) => (
    <button
    disabled={props.disabled}
    //Should in the end, result in ---->className={classes.Button classes[success]}
    /* "classes.props.btnType" would not work as it would mean that
    props is a PROPERTY of classes. Props is not a property of classes.
    Technically, classes.Success will work, but now, it's 
    (non-dynamic) hardwired. */
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;
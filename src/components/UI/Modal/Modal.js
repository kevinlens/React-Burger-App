import React from 'react'

//Import a LOCAL module css file
import classes from './Modal.module.css'

//STATELESS functional 'modal' component 
const modal = (props) => (
    <div className={classes.Modal}
         style={{
             transform: props.show ? 'translateY(0)':'translateY(-100vh)',
             opacity: props.show ? '1':'0'
         }}
    >
        {props.children}
    </div>
);

export default modal;
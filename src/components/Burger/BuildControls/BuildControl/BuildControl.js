import React from 'react'

//Import a LOCAL module css file 
import classes from './BuildControl.module.css';

//STATELESS functional 'buildControl' component aka (one of the controllers)
/*Note that the buildControl has an invisible 'return statement' before the
'(...)'*/
const buildControl = (props) => (
    /*We are using a <div> wrapper here because 
    we want to add a className to it which is 
    not possible with <Aux> or hoc*/
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removeClicked} >Less</button>
        <button className={classes.More} onClick={props.addClicked}>More</button>
    </div>
);

export default buildControl;
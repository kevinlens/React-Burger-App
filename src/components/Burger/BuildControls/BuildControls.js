
import React from 'react'

//Import a LOCAL module css file 
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

//An array with objects of the items for burger
const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];

//STATELESS functional 'buildControls' component aka (Organizer for the controllers)
const buildControls = (props) => (
    /*We are using a <div> wrapper here because 
    we want to add a className to it which is 
    not possible with <Aux> or hoc*/
    <div className={classes.BuildControls}>
    
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        
     {/* {controls} and then mapping through it, for every object in the controls
     array, print out a controller the 'more' or 'less' button  */}
        {controls
            .map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            /* whenever you want to pass an item through, you would do so
             by calling upon an annoymous function */
            addClicked={() => props.ingredientAdded(ctrl.type)}
            removeClicked={() => props.ingredientRemoved(ctrl.type)}
            /*disabledInfo:{
                salad:false,
                bacon:false,
                cheese:false,
                meat:false
            }*/
            /* props.disabled = disabledInfo OBJECT passed in, [ctrl.type] is a 
            e.g "salad",--->props.disabled[salad]------> get back "false"------>
            disabled={false}*/
            disabled={props.disabled[ctrl.type]}
            />
            ))
        }

        <button 
        className={classes.OrderButton}
        //If disabled is not false, which by default it is, then disable
        disabled={!props.purchasable}
        >ORDER NOW</button>

    </div>
);


//Exporting the the STATELESS component
export default buildControls;
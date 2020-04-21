
import React from 'react'

import Aux from '../../../hoc/Auxiliary'

import Button from '../../UI/Button/Button'

/*Whenever you are going to RETURN an element you would usually use the
parenthesis '()' and the '{}' for making statements and logic above the return statment*/
const orderSummary = (props) => {

    // turn ingredients object into an array e.g ['salad','bacon','cheese','meat']
    const ingredientSummary = Object.keys(props.ingredients)
    //for every igKey, e.g 'salad', in the array, return ....
        .map(igKey => {
        return (
        <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
        });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

         <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>

            <p>Continue to Checkout?</p>

            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );


};

export default orderSummary;
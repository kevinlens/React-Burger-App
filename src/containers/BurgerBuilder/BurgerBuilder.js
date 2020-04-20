import React, { Component } from "react"

//Importing in the AUX wrapper from the CUSTOM-BUILT Aux Component
import Aux from '../../hoc/Auxiliary'

//Importing STATELESS burger component from component file
import Burger from '../../components/Burger/Burger'

//Importing STATELESS controls component from component file
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import Modal from '../../components/UI/Modal/Modal'

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

//STATEFUL class component aka(The Entire Burger Application)
class BurgerBuilder extends Component{
    //State aka burger DATA for manipulation
    state = {
        //Ingredients OBJECT
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0 
        },
        totalPrice:4,
        purchasable: false,
        purchasing: false
    }



/*------------------------------------------------------------------ */

/*purchaseHandler(){} is only triggered through an event, therefore
  the this.setState() will not work*/
    purchaseHandler = () =>{
        this.setState({
            purchasing: true
        })
    }
/*purchaseCancelHandler(){} is only triggered through an event, therefore
  the this.setState() will not work*/
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }


    //A Method to update on whether or not the cart functionality can work
    updatePurchaseState(ingredients){

        //Making the object into an array e.g ['salad','bacon','cheese','meat']
        const sum = Object.keys(ingredients)
            .map(igKey =>{
                //basically return the value of the property e.g  "salad" ---> 2
                return ingredients[igKey]
            })
            //getting the sum of the returned valued from .map()
            .reduce((sum,el) => {
                return sum + el;
            //value will be starting at 0    
            },0);
            this.setState({
                //return true or false based on operation 
                purchasable: sum > 0
            })
    }

    //A METHOD to add an item to the burger
    addIngredientHandler = (type) => {
        /*taking the old data of the ingredients on the burger
        the [type] can be any ingredient like 'salad' or 'bacon'*/
        /* this.state.ingredient[salad] = 2 */ 
        const oldCount = this.state.ingredients[type];
        //adding 1 more of that item to the data
        const updatedCount = oldCount + 1;
        /*using the spread operator to spread the state object data 
        (basically we are cloning it), and yes, you can also use the 
        spread operator on an object as well and not just an array*/
        const updatedIngredients = {
            ...this.state.ingredients
        };
        /*change the [type] value(e.g [type] = 2) of the new 'updatedIngredients'
        object to the new updatedCount variable*/
        updatedIngredients[type] = updatedCount;
        //grab the passed in [type], value of the global object
        const priceAddition = INGREDIENT_PRICES[type];
        //setting oldPrice to the current price of the STATE
        const oldPrice = this.state.totalPrice;
        /*setting the newPrice to the oldPrice + priceAddition(which
            is the permanent price of the property value that is sold at)*/
        const newPrice = oldPrice + priceAddition;
        //Finally changing the ENTIRE current STATE to the new updated data
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredients
        });
        /*Each time add or remove button is clicked, update the purchase button
        by passing in the now update ingredient OBJECT*/
        this.updatePurchaseState(updatedIngredients);
    }

     //A METHOD to remove an item to the burger
    removeIngredientHandler = (type) => {
        /*taking the old data of the ingredients on the burger
        the [type] can be any ingredient like 'salad' or 'bacon'*/
        /* this.state.ingredient[salad] = 2 */ 
        const oldCount = this.state.ingredients[type];
        /*if the current ingredient [type] passed in is 0, then simply
        do nothing and return*/
        if(oldCount <= 0){
            return;
        }
        //removing 1 of that item from the data
        const updatedCount = oldCount - 1;
        /*using the spread operator to spread the state object data 
        (basically we are cloning it), and yes, you can also use the 
        spread operator on an object as well and not just an array*/
        const updatedIngredients = {
            ...this.state.ingredients
        };
        /*change the [type] value(e.g [type] = 2) of the new 'updatedIngredients'
        object to the new updatedCount variable*/
        updatedIngredients[type] = updatedCount;
        //grab the passed in [type], value of the global object
        const priceDeduction = INGREDIENT_PRICES[type];
        //setting oldPrice to the current price of the STATE
        const oldPrice = this.state.totalPrice;
        /*setting the newPrice to the oldPrice - priceDeduction(which
            is the permanent price of the item that is sold at)*/
        const newPrice = oldPrice - priceDeduction;
        //Finally changing the ENTIRE current STATE to the new updated data
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredients
        });
        /*Each time add or remove button is clicked, update the purchase button
        by passing in the now update ingredient OBJECT*/
        this.updatePurchaseState(updatedIngredients);
    }
/*------------------------------------------------------------------ */



    render(){


        /*spread operator distributing data from 
        ingredients object from STATE*/
        const disabledInfo = {
            ...this.state.ingredients
        };
        /*NOTE: It is very important to know that you cannot use the 
        .map() method loop through an OBJECT as it is only reserved for
        arrays, that is why you have to use the Object.keys() to get an 
        ARRAY
        It is just mostly preference whether or not you should use the
        Object.keys vs the "for...in" to loop an array*/
        /*The 'key' is there to mean, "for ever PROPERTY in disabledInfo",
        and every "key" e.g "salad" has a VALUE, e.g "salad:2" */
        /*Trying to set the newer object 'disabledInfo' property value(often
        referred to as 'key') to 'true' or 'false'. E.g 'disabledInfo[salad] = false' */    
        for(let key in disabledInfo){
            /* If statement is true, that specific property value 
            will be set to 'true', e.g 'salad: true'] */
            disabledInfo[key] = disabledInfo[key] <= 0
        }



        return(
            //Aux Wrapper
            <Aux>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>    

                {/* the manipulator of the DOM for the burger picture itself */}
                <Burger ingredients={this.state.ingredients}/>
                {/* the controllers for adding more or less items to the burger */}

                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                // passing in the data of 'disabledInfo'
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

//Exporting the the component
export default BurgerBuilder;
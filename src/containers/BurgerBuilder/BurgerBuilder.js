import React, { Component } from "react"

//Importing in the AUX wrapper from the CUSTOM-BUILT Aux Component
import Aux from '../../hoc/Auxiliary/Auxiliary'

//Importing STATELESS burger component from component file
import Burger from '../../components/Burger/Burger'

//Importing STATELESS controls component from component file
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

//Importing STATELESS OrderSummaryOverlay component from component file
import Modal from '../../components/UI/Modal/Modal'

//Importing STATELESS OrderSummary component from component file
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Spinner from '../../components/UI/Spinner/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'


//STATEFUL class component aka(The Entire Burger Application)
export class BurgerBuilder extends Component{
    //State aka burger DATA for manipulation
    state = {
        purchasing: false
    }
//compoentDidMount is best for FETCHING data
    componentDidMount(){
        this.props.onInitIngredients();
    }

/*------------------------------------------------------------------ */

/*purchaseHandler(){} is only triggered through an event, therefore
  the this.setState() will not work*/
    purchaseHandler = () =>{
    if(this.props.isAuthenticated) {

        this.setState({
            purchasing: true
        })

        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
/*purchaseCancelHandler(){} is only triggered through an event, therefore
  the this.setState() will not work*/
    purchaseCancelHandler = () => {

        this.setState({
            purchasing: false
        });
    }
/*--------------------------------------------------------------*/
    purchaseContinueHandler = () =>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');

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
         //return true or false based on operation 
         return sum > 0
      
    }

/*------------------------------------------------------------------ */



    render(){


        /*spread operator distributing data from 
        ingredients object from STATE*/
        const disabledInfo = {
            ...this.props.ings
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

/*---------------------------------------------------------------*/
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients cant be loaded!</p> : <Spinner />
/*---------------------------------------------------------------*/

        
//if the ingredients object is true or NOT null then invoke
        if(this.props.ings) {

        burger = (
            <Aux>
                {/* the manipulator of the DOM for the burger picture itself */}
                <Burger ingredients={this.props.ings}/>
    
    
                {/* the controllers for adding more or less items to the burger  */}
            <BuildControls 
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                // passing in the data of 'disabledInfo'
                disabled={disabledInfo}
                purchasable={this.updatePurchaseState(this.props.ings)}
                price={this.props.price}
                isAuth={this.props.isAuthenticated}
                ordered={this.purchaseHandler}/>

            </Aux>
            )

            orderSummary = <OrderSummary 
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ings}
                price={this.props.price} />;
        }


/*---------------------------------------------------------------*/
        return(
            //Aux Wrapper
            <Aux>

                {/* Modal is going to be the Order Summary OVERLAY */}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
                </Modal>    

                {burger}
                
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}


//Exporting the the component
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));






import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount(){
    // this.props.location.search = ?bacon=0&cheese=0&meat=1&salad=1 
    // URLSearchParams turns it into a query object
        const query = new URLSearchParams(this.props.location.search);
        //output: URLSearchParams {...query.entries}
        const ingredients = {};

        /* there a lot of params with different properties(ALL of which are set at [0] and value at [1])
        that has to be loop through from query.entries()*/
        for (let param of query.entries()){
            //the +param turns the param[1] into a value            
            //ingredients[param[0]] = +param[1]  ------->ingredients[salad] = 2
            /*ingredients[property] is the same as setting up a NEW property
            like ingredients.property inside an EMPTY object.*/
            //adding each individual params with a property to ingredients
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients});
        
    }


    checkoutCancelledHandler = () => {
        //means go back all the way to the main ROOT
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>
        )
    }
}

export default Checkout;
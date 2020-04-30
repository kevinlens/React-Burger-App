import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component{
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount(){
    // this.props.location.search = ?bacon=0&cheese=0&meat=1&salad=1 
    // URLSearchParams turns it into a query object
        const query = new URLSearchParams(this.props.location.search);
        //output: URLSearchParams {...query.entries}
        const ingredients = {};
        let price = 0;
        /* there a lot of params with different properties(ALL of which are set at [0] and value at [1])
        that has to be loop through from query.entries()*/
        for (let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }else{
            //the +param turns the param[1] into a value            
            //ingredients[param[0]] = +param[1]  ------->ingredients[salad] = 2
            /*ingredients[property] is the same as setting up a NEW property
            like ingredients.property inside an EMPTY object.*/
            //adding each individual params with a property to ingredients
            ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ingredients: ingredients});
        
    }


    checkoutCancelledHandler = () => {
        //means go back all the way to the main ROOT
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        // replaces current url which is '/checkout' with that below
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
            <Route 
                path={this.props.match.url + '/contact-data'} 
                // component={ContactData}
                //By using render it will be easier to pass in props to the desired component
                render={()=> (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />)}
                />
            </div>
        )
    }
}

export default Checkout;
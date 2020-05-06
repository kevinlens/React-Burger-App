import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

import {connect} from 'react-redux';

class Checkout extends Component{


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
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                />
            <Route 
                path={this.props.match.url + '/contact-data'} 
                component={ContactData}
            />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
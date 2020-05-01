import React, { Component } from 'react';

import Order from '../../components/Order/Order'

import axios from '../../axios-orders'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        //base url is already set to: https://burger-app-project-b3079.firebaseio.com/
        axios.get('./orders.json')
            .then(res => {
                const fetchedOrders = [];

                //the "data" an object containing additional objects returned
                for(let key in res.data){
                    fetchedOrders.push({
                        //spread out the objects with specific data out of the main object
                        ...res.data[key],
                        id:key
                    })
                }
                this.setState({
                    orders: fetchedOrders,
                    loading: false
                })
            })
            .catch(err =>{
                this.setState({loading: false})
            });
    }

    render() {
        return(
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
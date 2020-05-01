import React, { Component } from 'react';

import Order from '../../components/Order/Order'

import axios from '../../axios-orders'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentWillMount(){
        //base url is already set to: https://burger-app-project-b3079.firebaseio.com/
        axios.get('./orders.json')
            .then(res => {
                const fetchedOrders = [];

                //the "data" is an object containing additional "property: {objects}" returned
                for(let key in res.data){
                    fetchedOrders.push(   
                        /*"key" serves as "property" used to reference its values(objects)
                        ...res.data[property]------> ...{} spreading out object*/
                        /*spread out the specific data from the object out of the main object
                        and put it in your OWN object that will eventually make [{...},{...},{...}]*/
                        {
                        ...res.data[key],
                        id:key
                        }

                    )
                }
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })
            })
            .catch(err =>{
                this.setState({loading: false})
            });
    }

    render() {
        return(
            <div>
                
                {this.state.orders.map(order=>(
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients} 
                        price={order.price}
                        
                    />
                   
                ))}
          
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);

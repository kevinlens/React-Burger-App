
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

//actionCreators are for dealing async code

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}


export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseBurgerStart() );
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                console.log( response.data );
                dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseBurgerFail( error ) );
            } );
    };
};



export const purchaseInit = () =>{
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token) => {
    return dispatch => {

        dispatch(fetchOrdersStart())
        
                //base url is already set to: https://burger-app-project-b3079.firebaseio.com/
                axios.get('/orders.json?auth=' + token)
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
                    dispatch(fetchOrdersSuccess(fetchedOrders));
                })
                .catch(err =>{
                    dispatch(fetchOrdersFail(err))
                });
    }
}
 



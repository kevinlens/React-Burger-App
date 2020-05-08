
import * as actionTypes from '../actions/actionTypes';

//This file is going to connect to the seperate Order Page 

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true 
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                //concat is like .push() into the array
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTpes.FETCH_ORDERS_START:
            return{
                ...start,
                loading: true
            }    
        case actionTypes.FETCH_INGREDIENTS_SUCCESS:
            return{
                ...start,
                orders: action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            } 
        default:
            return state;       
    }
} 


export default reducer;

import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility'

//This file is going to connect to the seperate Order Page 

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false})
        case actionTypes.PURCHASE_BURGER_START: return updateObject(state, {loading: true})
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, {id: action.orderID})
            return updateObject(state,{
                ...state,
                loading: false,
                purchased: true,
                //concat is like .push() into the array
                orders: state.orders.concat(newOrder)
            })
        case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state, {loading: false})
        case actionTypes.FETCH_ORDERS_START: return updateObject(state,{loading:true })
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return(state,{
                ...state,
                orders: action.orders,
                loading: false
            })
        case actionTypes.FETCH_ORDERS_FAIL: return (state, {loading: false })
        default:
            return state;       
    }
} 


export default reducer;
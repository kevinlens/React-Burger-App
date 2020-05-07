import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice:4,
}


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {



    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
            return{
                //spreading out intial state properties
                //this only spread out the first properties and not the inner properties
                ...state,
                ingredients: {
                //this spreads out further properties within the first properties    
                    ...state.ingredients,
                /* [action.ingredientName] is a special way of selecting properties*/
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                //spreading out intial state properties
                //this only spread out the first properties and not the inner properties
                ...state,
                ingredients: {
                //this spreads out further properties within the first properties    
                    ...state.ingredients,
                /* [action.ingredientName] is a special way of selecting properties*/
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }    
        default:
            return state;         
    }

}

export default reducer;
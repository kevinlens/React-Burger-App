import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice:4,
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
                }
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
                }
            }    
        default:
            return state;         
    }

}

export default reducer;
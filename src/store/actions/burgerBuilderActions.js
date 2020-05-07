
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';



//These are called actionCreators that are necessary for async code

export const addIngredient = (name) => {

    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }

}


export const removeIngredient = (name) => {

    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }

}




export const setIngredients = (ingredients) => {
    return {
       type: actionTypes.SET_INGRDIENTS,
       ingredients:  ingredients
    }
}

export const fetchIngredientsFailed = () =>{
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}


//to be able to dispatch async code
export const initIngredients = () => {
    return dispatch => {

        //make sure to add .json at the end
        axios.get('https://burger-app-project-b3079.firebaseio.com/ingredients.json')
            .then(response =>{
                dispatch(setIngredients(response.data))
            })
            .catch(error =>{
                dispatch(fetchIngredientsFailed());
            });

    }
}




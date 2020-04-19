
import React  from 'react'

/*PropTypes is a dependency which you have to manually install and 
is important in terms of making sure that components receive the
right type of props. For e.g making sure props property of 'name' is always a string*/  
import PropTypes from 'prop-types'; 

//Import a LOCAL module css file 
import classes from './BurgerIngredient.module.css';


//STATELESS functional 'burgerIngredient' component aka (The ingredients)
const burgerIngredient =  (props) => {

    let ingredient = null;

    /*Returning ELEMENTS that make up part of the burger by
    reading the TYPE of the props passed into the component
    when you declare it like this (type="bread-top"),
    with 'props.type'. to figure out its type*/
    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top')://There is an invisible return before the ()
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;                        
        case('bacon'):
            ingredient = <div className={classes.bacon}></div>;
            break;        
        default:
            ingredient = null;             
    }
        //should return the props type as an ingredient
        return ingredient;
};

/*burerIngredient COMPONENT with prop passed in has
to have its 'props.type'(TYPE) be a strictly a string
or else it will return an error*/
burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

//Exporting the the STATELESS component
export default burgerIngredient;



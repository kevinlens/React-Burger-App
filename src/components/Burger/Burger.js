
import React from 'react'

//Import a LOCAL module css file 
import classes from './Burger.module.css'

//Import a STATELESS component from a burgerIngedient folder
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import burgerIngredient from './BurgerIngredient/BurgerIngredient';

//STATELESS 'burger' component aka (The Burger Itself)
const burger = (props) => {
    
    /*turning the (STATE: ingredient OBJECT) into an ARRAY with
    Object.key.
    ---> ingredients: ["salad", "bacon", "cheese", "meat"] */
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            // console.log(Array(2));
            // console.log(...Array(2));

            /*
            Array("Saab","Volvo","BMW") and ["Saab","Volvo","BMW"]
            are the same resulting in:
            Array(3) [ "Saab", "Volvo", "BMW" ]
            however, passing in a single element such as
            Array(2) is completely different
            */
           
            // console.log(...Array(props.ingredients[igKey]));

            /*Array() is a method taking in an argument, i has the 
            functionality of an array*/
            
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i } type={igKey}/>
            });
        })

    return(

        /*We are using a <div> wrapper here because 
        we want to add a className to it which is 
        not possible with <Aux> or hoc*/
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>


    );
};

//Exporting the the STATELESS component
export default burger;


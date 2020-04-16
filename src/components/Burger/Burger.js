
import React from 'react'

//Import a LOCAL module css file 
import classes from './Burger.module.css'

//Import a STATELESS component from a burgerIngedient folder
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import burgerIngredient from './BurgerIngredient/BurgerIngredient';

//STATELESS 'burger' component aka (The Burger Itself)
const burger = (props) => {
    
    /*turning the (STATE: ingredient OBJECT) into an ARRAY with
    Object.key. Then for every INDEX(igKey) within the newly
    created ARRAY, */
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                <BurgerIngredient key={igKey + 1 } type={igKey}/>
            });
        })

    return(

        /*We are using a <div> wrapper here because 
        we want to add a className to it which is 
        not possible with <Aux> or hoc*/
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>


    );
};

//Exporting the the STATELESS component
export default burger;


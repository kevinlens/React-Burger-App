
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
    /*for every item in "ingredients" igKey becomes that e.g 'salad'
    and that item STILL holds its value e.g salad: 1, meat: 2;
    console.log(igKey) //salad, bacon, cheese, meat, ect */
        .map(igKey =>{
            /*Array(2) creates [2 empty slot] array with a length of 2
            , but it has no value:
            [ <2 empty slots> ]
            */
            /*In order to have a value you have to use a
            spread operator on it to create 2 undefined values which also
            gets rid of the array bracket by doing (...Array(2)):
            undefined undefined
            */
            /*Then to get them into an array that holds 2 undefined values
            surround it with array brackets with [...Array(2)]:
            Array [ undefined, undefined ]
            */

            /*
            Array("Saab","Volvo","BMW") and ["Saab","Volvo","BMW"]
            are the same resulting in:
            [ "Saab", "Volvo", "BMW" ] with the length of 3
            however, passing in a single element such as
            Array(2) is completely different however.
            */
           
            /* [...Array(props.ingredients[igKey])] will result in 
            either 
            [ undefined, undefined ] or [ undefined]
            depending on the value of igKey e.g igKey of salad = 1 and meat = 2,
            if there are 2 meat, then 2 undefined values will be created in the array*/
            /*.Map() = For EVERY undefined value in the array, print out the 
            <BurgerIngredient> element. The '_' is there to serve as null bc you don't
            want to do anything with it, but the 'i' is so that you can have a unique key*/
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                /*The <BurgerIngredient> element amount printed will be related to
                the LENGTH of the array with undefined values, e.g [ undefined, undefined ]
                will result in printing 2 <BurgerIngredient> element.
                */
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



import React from 'react'

//Import a LOCAL module css file 
import classes from './Burger.module.css'

//Import a STATELESS component from a burgerIngedient folder
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

//STATELESS 'burger' component aka (The Burger Itself)
const burger = (props) => {
    
    /*turning the (STATE: ingredient OBJECT) into an ARRAY with
    Object.key.
    ---> ingredients: ["salad", "bacon", "cheese", "meat"] */
    let transformedIngredients = Object.keys(props.ingredients)
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
            [ undefined, undefined ] 
            or 
            [ undefined]
            or 
            [] 
            with no values at all,
            as an array being stored inside ANOTHER array 
            *
            [[1st loop],[2nd loop],[3rd loop],[4th loop]]
            *
            depending on the value of igKey e.g igKey of salad = 1 and meat = 2,
            if there are 2 meat, then 2 undefined values will be created in the array*/
            /*.Map() = For EVERY undefined value in the array, print out the 
            <BurgerIngredient> element. The '_' is there to serve as null bc you don't
            want to do anything with it, but the 'i' is so that you can have a unique key*/
            return [...Array(props.ingredients[igKey])]
                .map((_,i)=>{
                /*The <BurgerIngredient> element amount printed out will be related to
                the LENGTH of the array with undefined values, e.g [ undefined, undefined ]
                will result in printing 2 <BurgerIngredient> element.
                */
               /*An ELEMENT "<BurgerIngredient/>", is a plain OBJECT describing
               its desired properties. */
               /*After the entire array has been looped through it should look 
               like this 
                [[{…}], [{…}], [{…}], [{…}] ]
                An array holding arrays with objects to describe the element to be
                displayed to the DOM*/
                return <BurgerIngredient key={igKey + i } type={igKey}/>
                             });
        })
        /*checking to see if the array returned, has arrays with values. In this case,
        an object. In order to determine whether or not to print the message to the
        user to start adding the ingredients. e.g [[],[],[],[]] which is has array
        with arrays of nothing, no value*/
        /* 'el' is going to be the already returned array from above,
        for e.g [[{…}], [{…}], [{…}], [{…}] ] */
        .reduce((arr,el)=>{

            /*by contatenating it, it will result from [[{…}], [{…}], [{…}], [{…}] ] to
            [ {…}, {…}, {…}, {…}, {…}, {…} ]*/
            return arr.concat(el);
            
        /*the '[]' is the INITIAL value meaning 'arr' parameter is going to be 
        the new empty [] array that will accumulate new values*/
        },[]);

        /*if the function expression length is 0, meaning the [[],[],[],[]] turns to
        '[]' after 'arr.concat', rather than something like [[{…}], [{…}], [{…}], [{…}] ] to
        [ {…}, {…}, {…}, {…}, {…}, {…} ],
        then print out the paragraph element*/
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>
        }



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


import React, { Component } from "react"

//Importing in the AUX wrapper from the CUSTOM-BUILT Aux Component
import Aux from '../../hoc/Auxiliary'

//Importing STATELESS burger component from component file
import Burger from '../../components/Burger/Burger'

//Importing STATELESS controls component from component file
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

//STATEFUL class component aka(The Entire Burger Application)
class BurgerBuilder extends Component{
    //State aka burger DATA for manipulation
    state = {
        //Ingredients OBJECT
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0 
        }
    }

    render(){
        return(
            //Aux Wrapper
            <Aux>
                {/* the manipulator of the DOM for the burger picture itself */}
                <Burger ingredients={this.state.ingredients}/>
                {/* the controler for control the STATE data */}
                <BuildControls />
            </Aux>
        )
    }
}

//Exporting the the component
export default BurgerBuilder;
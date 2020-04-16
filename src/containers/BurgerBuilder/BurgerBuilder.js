import React, { Component } from "react"

//Importing in the AUX wrapper from the CUSTOM-BUILT Aux Component
import Aux from '../../hoc/Auxiliary'

//Importing STATELESS burger component from component file
import Burger from '../../components/Burger/Burger'

//STATEFUL component aka(The Entire Burger Application)
class BurgerBuilder extends Component{
    //State aka burger DATA for manipulation
    state = {
        //Ingredients OBJECT
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2 
        }
    }

    render(){
        return(
            //Aux Wrapper
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

//Exporting the the component
export default BurgerBuilder;
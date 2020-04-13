import React, { Component } from "react"

//Importing in the AUX wrapper from the CUSTOM-BUILT Aux Component
import Aux from '../../hoc/Auxiliary'

class BurgerBuilder extends Component{
    render(){
        return(){
            //Aux Wrapper
            <Aux>
                <div>
                    Burger
                </div>
                <div>Build Control</div>
            </Aux>
        }
    }
}

//Exporting the the component
export default BurgerBuilder;
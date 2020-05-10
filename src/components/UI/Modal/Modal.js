import React, {Component} from 'react'

//Import a LOCAL module css file
import classes from './Modal.module.css'

import Aux from '../../../hoc/Auxiliary/Auxiliary'

//Importing STATELESS 'Backdrop' component from component file aka (BackgroundMenuCancel)
import Backdrop from '../Backdrop/Backdrop';

//STATELFUL functional 'modal' component aka(OrderSummaryOverlay)
class Modal extends Component {

    
//shouldComponentUpdate will only invoke upon an update
/* this.props.show is the previous props, nextProps.show is the next
props, and if they are not the same, return true to update*/
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render(){
        return(
            <Aux>



            {/* BackgroundMenuCancel */}
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    
    
    
    
            {/* OrderSummaryOverlay itself */}
        <div className={classes.Modal}
             style={{
                 transform: this.props.show ? 'translateY(0)':'translateY(-100vh)',
                 opacity: this.props.show ? '1':'0'
             }}
        >
            {this.props.children}
        </div>
    
    
    
    
        </Aux>
        )
    }
  
}

export default Modal;
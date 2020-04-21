import React from 'react'

//Import a LOCAL module css file
import classes from './Modal.module.css'

import Aux from '../../../hoc/Auxiliary'

//Importing STATELESS 'Backdrop' component from component file aka (BackgroundMenuCancel)
import Backdrop from '../Backdrop/Backdrop';

//STATELESS functional 'modal' component aka(OrderSummaryOverlay)
const modal = (props) => (
    <Aux>



        {/* BackgroundMenuCancel */}
    <Backdrop show={props.show} clicked={props.modalClosed}/>




        {/* OrderSummaryOverlay itself */}
    <div className={classes.Modal}
         style={{
             transform: props.show ? 'translateY(0)':'translateY(-100vh)',
             opacity: props.show ? '1':'0'
         }}
    >
        {props.children}
    </div>




    </Aux>
);

export default modal;
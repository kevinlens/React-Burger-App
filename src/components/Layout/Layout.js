import React from 'react'

/*Aux is important to import, so that you could use it wrap it around 
your ELEMENTS without having to use the normal <div> wrapper 
which would also require a key*/
import Aux from '../../hoc/Auxiliary'


const layout = (props) => (
    <Aux>
        <div>
            Toolbar,
            SideDrawer,
            Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;
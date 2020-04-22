/*Aux is important to IMPORT, so that you could use it wrap it around 
your ELEMENTS without having to use the normal <div> wrapper. By using
a <div> wrapper you would run into problems when you loop your component
resulting in MESSIER and HARDER to read code. E.g A continous stack of 
<div> stacking on divs when you loop the component. HOWEVER, there are cases
where it would be a good idea to use <div> for e.g, styling the wrapper.
In which case ONLY the <div> can have a className. Aux is a CUSTOM built
Aux component. If you prefer a built-in Aux component
then import in {Fragment} from 'react' and use the wrapper 
<Fragment></Fragment>. 
However, with the intro of Babel 7 you can use the new syntactic
sugar of the wrapper element with just <></> and be done. But all in all
these all work EXACTLY the same. 
*/
import Aux from '../../hoc/Auxiliary'
import React, {Component} from 'react'
/*With the introduction of Create-React-App(CRA) 16.2(Version 2) 
CSS Modules are now supported as a built-in-feature from the time
you create the starting files. Meaning you no longer have to eject your
React-Scripts(Don't ever do this as you lose your warranty) to be able
to use CSS Modules. CSS Modules are a better way for you to work with
CSS in a large group project without having to worry about having the
same name classes and its interferences with each other, as it has a 
scoping feature to it*/
import classes from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'

import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () =>{
        this.setState({showSideDrawer: true})
    }

    render(){
        return (
        //Aux Wrapper
        <Aux>
            
            <Toolbar open={this.sideDrawerOpenHandler} />

            <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>

            {/* THIS IS GOING TO BE <BurgerBuilder /> */}
            <main className={classes.Content}>
            {/* {props.children} is going to reference the <BurgerBuilder /> element 
            from App.js*/}
                {this.props.children}
            </main>
        </Aux>
        )
    }
}


/* Basically components can only return a single element because 
it is just a syntactic sugar for 
React.createElement('p', null, 'Hello, world!'), which accepts only 
one element expression to its argument, meaning you can return the element 
children inside an array [<p><p>,<input/>] rather than have a div
wrapper around them and it would still work*/






//Exporting the the STATELESS component
export default Layout;
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
import React from 'react'






/*Using normal function component because it wont be dealing
with state*/
const layout = (props) => (
    //Aux Wrapper
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
/* Basically components can only return a single element because 
it is just a syntactic sugar for 
React.createElement('p', null, 'Hello, world!'), which accepts only 
one element expression to its argument, meaning you can return the element 
children inside an array [<p><p>,<input/>] rather than have a div
wrapper around them and it would still work*/






//Exporting the the component
export default layout;
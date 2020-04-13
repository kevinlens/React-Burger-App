

/*The "children" of props.children is a reserved tag will ALWAYS, 
refer to ALL the content in BETWEEN the OPENING and CLOSING wrapper tag,
and it OUTPUTS(return) all the content there. This is a a good method to 
replace the <div></div> wrapper with
<Aux></Aux>
also there is an invisble "return" before the props.children*/
const aux = (props) => props.children;

export default aux;
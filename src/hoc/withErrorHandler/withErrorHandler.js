import React, {Component} from 'react'

import Modal from '../../components/UI/Modal/Modal'

import Aux from '../Auxiliary/Auxiliary'


/*this is the passed in arguments from BurgerBuilder.js that exported
at the very bottom*/
const withErorrHandler = (WrappedComponent, axios) =>{

//since you never use the class, you will return it as an anonymous class
    return class extends Component {
        
        state = {
            error: null
        }

        componentDidMount(){
//designed to clear the previous error state            
            axios.interceptors.request.use(req =>{
                this.setState({error: null})
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error:error});
            });
        }

        errorConfirmedHandler(){
            this.setState({
                error: null
            })
        }

        render(){
            return(
            <Aux>
                <Modal 
                show={this.state.error}
                clicked={this.errorConfirmedHandler}
                >
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/> 
            </Aux>
            );
        }

    }

}


export default withErorrHandler;
import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

//Importing in the LAYOUT Component from STATELESS component files
import Layout from './hoc/Layout/Layout'
//Importing in the BurgerBuilder Component from STATEFUL container files
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import Checkout from './containers/Checkout/Checkout'

import Orders from './containers/Orders/Orders'

import Auth from './containers/Auth/Auth'

import Logout from './containers/Auth/Logout/Logout'

import * as actions from './store/actions/index';

/*Using a class based component because it will be dealing with
stateful component*/
/*STATEFUL 'App' class component, which always has a capital case
for the first letter as its typical naming convention*/

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

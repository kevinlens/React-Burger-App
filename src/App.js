import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

//Importing in the LAYOUT Component from STATELESS component files
import Layout from './hoc/Layout/Layout'
//Importing in the BurgerBuilder Component from STATEFUL container files
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import Checkout from './containers/Checkout/Checkout'

/*Using a class based component because it will be dealing with
stateful component*/
/*STATEFUL 'App' class component, which always has a capital case
for the first letter as its typical naming convention*/
class App extends Component {
  render(){
    return (
      <div>

        {/* App layout */}
        <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
        </Layout>


      </div>
    );
  }
}

export default App;

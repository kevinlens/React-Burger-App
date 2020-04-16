import React, {Component} from 'react';

//Importing in the LAYOUT Component from STATELESS component files
import Layout from './components/Layout/Layout'
//Importing in the BurgerBuilder Component from STATEFUL container files
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

/*Using a class based component because it will be dealing with
stateful component*/
/*STATEFUL 'App'  Class component, which always has a capital case
for the first letter as its typical naming convention*/
class App extends Component {
  render(){
    return (
      <div>

        {/* App layout */}
        <Layout>
          <BurgerBuilder />
        </Layout>

      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

//Importing in the LAYOUT Component from STATELESS component files
import Layout from './components/Layout/Layout'

/*Using a class based component because it will be dealing with
stateful component*/
class App extends Component {
  render(){
    return (
      <div>
        
        {/* App layout */}
        <Layout>
          <p>Test</p>
        </Layout>

      </div>
    );
  }
}

export default App;

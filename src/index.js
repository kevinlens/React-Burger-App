import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(burgerBuilderReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();

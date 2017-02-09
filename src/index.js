import React from 'react';
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer'
import App from './App';
import './index.css';

// const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
//store instance is passed into Provider as a prop, making it available to all ouf our other components. This gives our components the ability to be connected to the store

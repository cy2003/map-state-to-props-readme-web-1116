import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleOnClick(){
    this.props.store.dispatch({type: 'GET_COUNT_OF_ITEMS'})
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.handleOnClick.bind(this)}>Click</button>
          <p> {this.props.items.length}</p>
      </div>
    );
  }
}


const connectedComponent = connect(mapStateToProps)(App)
//this listens to every change in the store
//It is synced up to our store, listens to each change in the state that occurs
//When a change occurs, it calls the mapStateToProps function.

function mapStateToProps(state){
  return {items: state.items}
}
//In this function we specify which slice of the state we want to provide to our component. Here we are providing state.items and allowing our component to have access to them through a prop called items.

export default connectedComponent;
//this is the component we wish to export.

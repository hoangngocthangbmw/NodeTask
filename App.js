import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './src/Main';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const reducer = (state = 0, action) => {
  return state;
}

const store = createStore(reducer);



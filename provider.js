import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

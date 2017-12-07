import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import appReducer from './Reducers'
import Root from './Components/Root'

let store = createStore(
  appReducer
);

render(
  <Root store={store} />,
  document.getElementById('root')
);

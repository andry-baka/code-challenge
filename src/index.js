import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { reducer as counter } from './counter'
import { reducer as treeView } from './treeView'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(combineReducers({
  counter,
  treeView
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from './Navigation'
import { Counter } from './counter'
import { TreeView } from './treeView'
import { About } from './about'

const App = () => (
  <Router>
    <div>
      <h1>IOOF Code Challenge</h1>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <p>Please read README.md</p>
        </Route>
        <Route path="/counter" component={Counter} />
        <Route path="/tree-view" component={TreeView} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)

export default App

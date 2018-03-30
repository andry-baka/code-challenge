import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from './Navigation'
import { Counter } from './counter'
import { TreeView } from './treeView'
import { About } from './about'

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const App = () => (
  <Router>
    <div>
      <Grid container spacing={24} style={{ color: '#ffffff', backgroundColor: '#2e404c' }}>
        <Grid item xs={8}>
          <h1>IOOF Code Challenge</h1>
        </Grid>
        <Grid item xs={4}>
          <h2>Andry Baka</h2>
        </Grid>
      </Grid>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div>
            <div style={ { backgroundImage: `url("/public/background.jpg")` } } >
            <Button variant="raised" style={{ margin: 100 }}>
              Set a default value for your counter by pressing my counter.
              Then create a tree on the tree view tab.
            </Button>
            </div>
          </div>
        </Route>
        <Route path="/counter" component={Counter} />
        <Route path="/tree-view" component={TreeView} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)

export default App

import React from 'react'
import { NavLink, Link } from "react-router-dom"

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit,
    backgroundColor: '#2e404c'
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            style={{ color: '#ffffff', backgroundColor: '#2e404c' }} 
            indicatorColor='#4CAF50'
            value={value}
            onChange={this.handleChange}
          >
            <Tab label="Home" component={Link} to="/counter" />
            <Tab label="My Counter" component={Link} to="/counter" />
            <Tab label="Tree View" component={Link} to="/tree-view" />
            <Tab label="About" component={Link} to="/about" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
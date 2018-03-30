import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createNode, deleteNode, addChild, removeChild, incrementById, decrementById } from './actions'
import TreeViewCounter from './TreeViewCounter'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Clear';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const COLOR_GREEN = '#4CAF50';
export class Node extends Component {
  handleAddChildClick = e => {
    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemoveClick = e => {
    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  handleIncrementClick = e => {
    const { id, incrementById } = this.props
    incrementById(id)
  }

  handleDecrementClick = e => {
    const { id, decrementById } = this.props
    decrementById(id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { id, parentId, childIds, counter } = this.props
    return (
      <div>
        Counter {id}:
        <Grid container alignItems="center">
          <Grid>
            <TreeViewCounter
              id={id}
              value={counter}
              onIncrement={this.handleIncrementClick}
              onDecrement={this.handleDecrementClick}
            />
          </Grid>
          <Grid>
            {typeof parentId !== 'undefined' && 
              <IconButton  onClick={this.handleRemoveClick}>
                <DeleteIcon />
              </IconButton>}
          </Grid>
        </Grid>
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <Button
              size="medium"
              variant="raised"
              color="primary"
              style={{backgroundColor: COLOR_GREEN}}
              onClick={this.handleAddChildClick}
            >
              Add Counter
            </Button>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state.treeView[ownProps.id]
}

const mapDispatchToProps = {
  createNode, 
  deleteNode, 
  addChild, 
  removeChild,
  incrementById,
  decrementById
}

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Node)
export default ConnectedNode
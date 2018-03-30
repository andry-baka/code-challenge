import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createNode, deleteNode, addChild, removeChild, incrementById, decrementById } from './actions'
import TreeViewCounter from './TreeViewCounter'

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
        <TreeViewCounter
          id={id}
          value={counter}
          onIncrement={this.handleIncrementClick}
          onDecrement={this.handleDecrementClick}
        />
        {typeof parentId !== 'undefined' && <button onClick={this.handleRemoveClick}>×</button>}
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <button onClick={this.handleAddChildClick}>Add Counter</button>
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
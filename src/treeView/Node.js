import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createNode, deleteNode, addChild, removeChild } from './actions'
import { Counter } from '../counter'

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

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { id, parentId, childIds } = this.props
    return (
      <div>
        Counter {id}: <Counter />
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
  removeChild 
}

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Node)
export default ConnectedNode
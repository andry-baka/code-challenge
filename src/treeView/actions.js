export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'

export const INCREMENT_BY_ID = 'INCREMENT_BY_ID'
export const DECREMENT_BY_ID = 'DECREMENT_BY_ID'

const DELAY = 1000;

let nextId = 1
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: nextId++
})

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
})

export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
})

export const removeChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
})

export const incrementById = (id) => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: INCREMENT_BY_ID,
        nodeId: id
      })
    }, DELAY)
  }
}

export const decrementById = (id) => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: DECREMENT_BY_ID,
        nodeId: id
      })
    }, DELAY)
  }
}

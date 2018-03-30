
import React from 'react'

/* This TreeViewCounter is a small disconnected compenent for rendering the seperate counter value
   No needed to connected to redux since all state is managed by parent component

   Note that later we do not need the original Counter anymore.
*/

const TreeViewCounter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <button onClick={onDecrement}>-</button>
    {value}
    <button onClick={onIncrement}>+</button>
  </div>
)

export default TreeViewCounter

import React from 'react'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';

/* This TreeViewCounter is a small disconnected compenent for rendering the seperate counter value
   No needed to connected to redux since all state is managed by parent component

   Note that later we do not need the original Counter anymore.
*/

const COLOR_GREEN = '#4CAF50';

const TreeViewCounter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <Button
      variant="fab"
      mini
      color="secondary"
      style={{backgroundColor: COLOR_GREEN}}
      onClick={onDecrement}
    >
      <RemoveIcon />
    </Button>

    <b> {value} </b>

    <Button
      variant="fab"
      mini
      color="secondary"
      style={{backgroundColor: COLOR_GREEN}}
      onClick={onIncrement}
    >
      <AddIcon />
    </Button>
  </div>
)

export default TreeViewCounter
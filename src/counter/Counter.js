import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';

const COLOR_GREEN = '#4CAF50';

const Counter = ({ value, increment, decrement }) => (
  <div>
    <Button
      variant="fab"
      mini
      color="secondary"
      style={{backgroundColor: COLOR_GREEN}}
      onClick={decrement}
    >
      <RemoveIcon />
    </Button>

    <b> {value} </b>

    <Button
      variant="fab"
      mini
      color="secondary"
      style={{backgroundColor: COLOR_GREEN}}
      onClick={increment}
    >
      <AddIcon />
    </Button>
  </div>
)

const mapStateToProps = state => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


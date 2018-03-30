import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

const Counter = ({ value, increment, decrement }) => (
  <div>
    <button onClick={decrement}>-</button>
    {value}
    <button onClick={increment}>+</button>
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
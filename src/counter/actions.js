export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const DELAY = 1000;

export const increment = () => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, DELAY)
  }
}

export const decrement = () => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, DELAY)
  }
}

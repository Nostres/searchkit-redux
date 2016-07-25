import { fromJS } from 'immutable'
import { UPDATE_DISPLAYED, UPDATE_QUERY } from './actions'

const INITIAL_STATE = fromJS({
  displayed: [],
  query: {},
})

export const HitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DISPLAYED:
      return state.set('displayed', action.displayed)
    case UPDATE_QUERY:
      return state.set('query', action.query.query)
    default:
      return state
  }
}

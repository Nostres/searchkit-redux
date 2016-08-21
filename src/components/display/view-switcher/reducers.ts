import { fromJS } from 'immutable'
import {
  SWITCH_VIEW,
} from './actions'

const INITIAL_STATE = fromJS({
  currentView: null,
})

export const ViewSwitcherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return state.set('currentView', action.view)
    default:
      return state
  }
}

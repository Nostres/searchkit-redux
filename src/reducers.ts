const combineReducers = require('redux-immutable').combineReducers
import { ViewSwitcherReducer } from './components/display/view-switcher/reducers'

export const SearchKitReducer = combineReducers({
  viewSwitcher: ViewSwitcherReducer,
})

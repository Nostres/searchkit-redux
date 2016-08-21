const combineReducers = require('redux-immutable').combineReducers
import { ViewSwitcherReducer } from './components/display/view-switcher/reducers'
import { HitsReducer } from './components/search/hits/src/reducers'

export const SearchKitReducer = combineReducers({
  viewSwitcher: ViewSwitcherReducer,
  items: HitsReducer,
})

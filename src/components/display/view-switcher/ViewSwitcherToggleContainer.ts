const connect = require('react-redux').connect
import { ViewSwitcherToggle } from './ViewSwitcherToggle'
import { switchView } from './actions'

const mapDispatchToProps = dispatch => ({
  switchView(view) {
    dispatch(switchView(view))
  }
})

export const ViewSwitcherToggleContainer = connect(
  undefined,
  mapDispatchToProps
)(ViewSwitcherToggle)

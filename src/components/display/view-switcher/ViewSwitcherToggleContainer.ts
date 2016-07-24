const connect = require('react-redux').connect
import { ViewSwitcherToggle } from './ViewSwitcherToggle'
import { switchView } from './actions'

console.log({ connect })
// const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  switchView(view) {
    dispatch(switchView(view))
  }
})

export const ViewSwitcherToggleContainer = connect(
  // mapStateToProps,
  undefined,
  mapDispatchToProps
)(ViewSwitcherToggle)

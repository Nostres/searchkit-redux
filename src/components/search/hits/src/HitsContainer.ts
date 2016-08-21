const connect = require('react-redux').connect
import { Hits } from './Hits'
import { updateDisplayed, updateQuery } from './actions'

const mapDispatchToProps = dispatch => ({
  updateDisplayed(displayed) {
    dispatch(updateDisplayed(displayed))
  },
  updateQuery(query) {
    dispatch(updateQuery(query))
  }
})

export const HitsContainer = connect(
  undefined,
  mapDispatchToProps
)(Hits)

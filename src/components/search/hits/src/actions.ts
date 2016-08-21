export const UPDATE_DISPLAYED = 'UPDATE_DISPLAYED'
export const UPDATE_QUERY = 'UPDATE_QUERY'

export const updateDisplayed = displayed => ({
  type: UPDATE_DISPLAYED,
  displayed,
})

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  query,
})

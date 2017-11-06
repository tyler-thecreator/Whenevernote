import { merge } from 'lodash'
import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_SINGLE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebooks_actions'

const NotebooksReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks

    case RECEIVE_SINGLE_NOTEBOOK:
      newState = merge({}, state)
      newState[action.notebook.id] = action.notebook
      return newState

    case REMOVE_NOTEBOOK:
      newState = merge({}, state)
      delete newState[action.notebook.id]
      return newState

    default:
      return state
  }
}

export default NotebooksReducer

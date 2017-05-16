import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });

    default:
      return state;
  }
};

export default SessionReducer;

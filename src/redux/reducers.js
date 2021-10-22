import * as ActionTypes from './action_types';

export const user = (state = { isLoading: false, errMess: null, data: [] }, action) => {
  switch (action.type) {

    case ActionTypes.LOGGING_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.LOGGING_SUCCESS:
      return { ...state, isLoading: false, errMess: null, data: action.payload };
    case ActionTypes.LOGGING_SUCCESS:
      return { ...state, isLoading: true, errMess: null };

    default:
      return state;
  }
};
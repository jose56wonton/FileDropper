import * as actions from "../constants/action-type-constants";
import * as status from "../constants/state-status-constants";

const initialState = {
  status: status.INIT
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SESSION_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.GET_SESSION_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS
      };
    case actions.GET_SESSION_FAILURE:
      return {        
        status: status.ERROR
      };
    default:
      return state;
  }
};

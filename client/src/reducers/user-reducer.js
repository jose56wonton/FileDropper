import * as actions from "../actions/types";
import * as status from "./status";

const initialState = {
  status: status.LOGOUT
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.LOGIN_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        status: status.ERROR
      };
    case actions.LOGOUT_USER_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.LOGOUT_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS
      };
    case actions.LOGOUT_USER_FAILURE:
      return {
        status: status.ERROR
      };
    case actions.SIGNUP_USER_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.SIGNUP_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS
      };
    case actions.SIGNUP_USER_FAILURE:
      return {
        status: status.ERROR
      };
    default:
      return state;
  }
};

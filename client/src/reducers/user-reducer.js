import * as actions from "../actions/types";
import * as status from "./status";

const initialState = {
  status: status.LOGOUT,
  statusMsg: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_REQUEST:
      return {
        status: status.LOADING,
        statusMsg: ""
      };
    case actions.LOGIN_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS,
        statusMsg: "Log in Success!"
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        status: status.ERROR,
        statusMsg: "Log in Error!"
      };

    case actions.LOGOUT_USER_REQUEST:
      return {
        status: status.LOADING,
        statusMsg: ""
      };
    case actions.LOGOUT_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS,
        statusMsg: "Log Out Success!"
      };
    case actions.LOGOUT_USER_FAILURE:
      return {
        status: status.ERROR,
        statusMsg: "Log Out Error!"
      };
    case actions.SIGNUP_USER_REQUEST:
      return {
        status: status.LOADING,
        statusMsg: ""
      };
    case actions.SIGNUP_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS,
        statusMsg: "Sign Up Success!"
      };
    case actions.SIGNUP_USER_FAILURE:
      return {
        status: status.ERROR,
        statusMsg: "Sign Up Error!"
      };
    case actions.PASSWORD_MATCH_ERROR:
      return {
        status: status.ERROR,
        statusMsg: "Passwords must match!"
      }
    case actions.RESET_USER_REQUEST:
      return {
        status: status.LOADING,
        statusMsg: ""
      };
    case actions.RESET_USER_SUCCESS:
      return {
        value: action.payload,
        status: status.SUCCESS,
        statusMsg: `Password reset email sent to ${action.email}!`
      };
    case actions.RESET_USER_FAILURE:
      return {
        status: status.ERROR,
        statusMsg: `Password reset email could not be sent. ${action.email}! is not valid`
      };
    default:
      return state;
  }
};

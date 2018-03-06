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
        statusMsg: ""
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        status: status.ERROR,
        value: action.payload,
        statusMsg: action.payload.message
      };

    case actions.LOGOUT_USER_REQUEST:
      return {
        status: status.LOADING,
        statusMsg: ""
      };
    case actions.LOGOUT_USER_SUCCESS:
      console.log(action.payload);
      return {
        value: action.payload,
        status: status.LOGOUT,
        statusMsg: ""
      };
    case actions.LOGOUT_USER_FAILURE:
      return {
        status: status.ERROR,
        value: action.payload,
        statusMsg: action.payload.message
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
        statusMsg: ""
      };
    case actions.SIGNUP_USER_FAILURE:
      console.log(action.payload);
      return {
        status: status.ERROR,
        value: action.payload,
        statusMsg: action.payload.message
      };
    case actions.PASSWORD_MATCH_ERROR:
      return {
        status: status.ERROR,
        value: action.payload,
        statusMsg: "Passwords do not match."
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
        value: action.payload,
        statusMsg: `Password reset email could not be sent. ${action.email}! is not valid`
      };
    case actions.RESET_MSG:
      return {
        statusMsg: ""
      }
    default:
      return state;
  }
};

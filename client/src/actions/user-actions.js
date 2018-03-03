import * as types from './types';
import * as auth from '../helpers/auth';


export const login = (email,password)=>{
  const userRequest = auth.login(email,password);
  return (dispatch) => {
    dispatch({type: types.LOGIN_USER_REQUEST});
    return userRequest.then(
      response => {
        dispatch({type: types.LOGIN_USER_SUCCESS, payload: response})
      },
      error => {
        dispatch({type: types.LOGIN_USER_FAILURE, payload: error})
      }
    )
  }
}
export const logout = () => {
  const userRequest = auth.logout();
  return (dispatch) => {
    dispatch({type: types.LOGOUT_USER_REQUEST});
    return userRequest.then(
      response => {
        dispatch({type: types.LOGOUT_USER_SUCCESS, payload: response})
      },
      error => {
        dispatch({type: types.LOGOUT_USER_FAILURE, payload: error})
      }
    )
  }
}

export const signup = (email,password)=>{
  const userRequest = auth.auth(email,password);
  return (dispatch) => {
    dispatch({type: types.SIGNUP_USER_REQUEST});
    return userRequest.then(
      response => {
        dispatch({type: types.SIGNUP_USER_SUCCESS, payload: response})
      },
      error => {
        dispatch({type: types.SIGNUP_USER_FAILURE, payload: error})
      }
    )
  }
}
export const reset = (email) => {
  const userRequest = auth.resetPassword(email);
  return(dispatch) =>{
    dispatch({type: types.RESET_USER_REQUEST});
    return userRequest.then(
      response => {
        dispatch({type: types.RESET_USER_SUCCESS, payload: response, email: email})
      },
      error => {
        dispatch({type: types.RESET_USER_FAILURE, payload: error, email: email})
      }
    )
  }
}
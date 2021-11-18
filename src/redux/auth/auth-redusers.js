import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  registerRequest,
  registerSuccses,
  registerError,
  loginRequest,
  loginSuccses,
  loginError,
  logoutRequest,
  logoutSuccses,
  logoutError,
} from "./auth-actions";

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

export const userReducer = createReducer(
  { name: null, email: null },
  {
    [registerSuccses]: (_, action) => action.payload.user,
    [loginSuccses]: (_, action) => action.payload.user,
    [logoutSuccses]: () => ({ name: null, email: null }),
    // state.token = action.payload.token;
    // state.isLoggedIn = true;
  }
);

const tokenReduser = createReducer(null, {
  [registerSuccses]: (_, action) => action.payload.token,
  [loginSuccses]: (_, action) => action.payload.token,
  [logoutSuccses]: (state) => null,
});

const isLoggedIn = createReducer(false, {
  [registerRequest]: () => false,
  [registerSuccses]: () => true,
  [registerError]: () => false,

  [loginRequest]: () => false,
  [loginSuccses]: () => true,
  [loginError]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccses]: () => false,
  [logoutError]: () => true,
});

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenReduser,
  isLoggedIn,
});

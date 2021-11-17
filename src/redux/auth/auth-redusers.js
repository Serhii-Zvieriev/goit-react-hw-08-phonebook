import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  registerRequest,
  registerSuccses,
  registerError,
} from "./auth-actions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authReducer = createReducer(initialState, {
  [registerSuccses]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
});

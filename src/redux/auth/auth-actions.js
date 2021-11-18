import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccses = createAction("auth/registerSuccses");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccses = createAction("auth/loginSuccses");
export const loginError = createAction("auth/loginError");

export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccses = createAction("auth/logoutSuccses");
export const logoutError = createAction("auth/logoutError");

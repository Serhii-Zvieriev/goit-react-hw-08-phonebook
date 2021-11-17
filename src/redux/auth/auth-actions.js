import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("contacts/registerRequest");
export const registerSuccses = createAction("contacts/registerSuccses");
export const registerError = createAction("contacts/registerError");

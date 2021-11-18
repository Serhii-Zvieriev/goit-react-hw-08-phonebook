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

// import { persistor } from "../store";

// let token = "";

// const token = {
//   set(token) {
//     Authorization: `Bearer ${token}`;
//   },
//   unset() {
//     Authorization: "";
//   },
// };

const BASE_URL = "https://connections-api.herokuapp.com";

//====================== Register ======================
export const register = (credentials) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(registerRequest());
  try {
    const response = await fetch(BASE_URL + "/users/signup", options);
    const data = await response.json();
    dispatch(registerSuccses(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

//====================== Login ======================
export const login = (credentials) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(loginRequest());
  try {
    const response = await fetch(BASE_URL + "/users/login", options);
    const data = await response.json();
    dispatch(loginSuccses(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

//====================== logout ======================
export const logout = (credentials) => async (dispatch) => {
  const token = localStorage.getItem("persist:auth").slice(12, 161);

  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(logoutRequest());
  try {
    const response = await fetch(BASE_URL + "/users/logout", options);
    const data = await response.json();
    console.log(data);
    dispatch(logoutSuccses(data));
  } catch (error) {
    dispatch(logoutError(error));
  }
};

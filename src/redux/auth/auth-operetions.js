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
  fetchCurrentUserRequest,
  fetchCurrentUserSuccses,
  fetchCurrentUserError,
} from "./auth-actions";

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
export const logout = (token) => async (dispatch) => {
  // const token = localStorage.getItem("persist:auth").slice(12, 161);

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(logoutRequest());
  try {
    const response = await fetch(BASE_URL + "/users/logout", options);
    const data = await response.json();
    dispatch(logoutSuccses(data));
  } catch (error) {
    dispatch(logoutError(error));
  }
};

//====================== fetchCurrentUser ======================
export const fetchCurrentUser = (token) => async (dispatch) => {
  if (token === null) {
    return;
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(fetchCurrentUserRequest());

  try {
    const response = await fetch(`${BASE_URL}/users/current`, options);
    const contact = await response.json();
    console.log(contact);
    dispatch(fetchCurrentUserSuccses(contact));
  } catch (error) {
    dispatch(fetchCurrentUserError(error));
  }
};

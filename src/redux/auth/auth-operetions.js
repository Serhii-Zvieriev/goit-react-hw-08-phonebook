import {
  registerRequest,
  registerSuccses,
  registerError,
} from "./auth-actions";

let token = "";

// const token = {
//   set(token) {
//     Authorization: `Bearer ${token}`;
//   },
//   unset() {
//     Authorization: "";
//   },
// };

const BASE_URL1 = "https://connections-api.herokuapp.com";

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
    const response = await fetch(BASE_URL1 + "/users/signup", options);
    const data = await response.json();
    token = data.token;
    dispatch(registerSuccses(data));
    // return data;
  } catch (error) {
    dispatch(registerError(error));
  }
};

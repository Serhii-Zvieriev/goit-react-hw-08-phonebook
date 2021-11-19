import {
  fetchContactsRequest,
  fetchContactsSuccses,
  fetchContactsError,
  addContactRequest,
  addContactSuccses,
  addContactError,
  deleteContactRequest,
  deleteContactSuccses,
  deleteContactError,
} from "./contacts-actions";

// const BASE_URL = "https://6187f42f057b9b00177f9b58.mockapi.io/api/v1";
const BASE_URL = "https://connections-api.herokuapp.com";

//====================== Fetch ======================
export const fetchContacts = (token) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(fetchContactsRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`, options);
    const contacts = await response.json();
    dispatch(fetchContactsSuccses(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

//====================== DELETE ======================
export const deleteContact = (idContact) => async (dispatch) => {
  const token = localStorage.getItem("persist:auth").slice(12, 161);

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(deleteContactRequest());

  try {
    await fetch(`${BASE_URL}/contacts/${idContact}`, options);
    dispatch(deleteContactSuccses(idContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

//====================== ADD ======================
export const addContact = (text) => async (dispatch) => {
  const token = localStorage.getItem("persist:auth").slice(12, 161);

  const options = {
    method: "POST",
    body: JSON.stringify(text),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(addContactRequest());

  try {
    const response = await fetch(BASE_URL + `/contacts`, options);
    const contact = await response.json();
    dispatch(addContactSuccses(contact));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

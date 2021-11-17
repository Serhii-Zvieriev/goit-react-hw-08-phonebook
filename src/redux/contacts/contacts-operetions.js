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

const BASE_URL = "https://6187f42f057b9b00177f9b58.mockapi.io/api/v1";

//====================== Fetch ======================
export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    const contacts = await response.json();
    dispatch(fetchContactsSuccses(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

//====================== DELETE ======================
export const deleteContact = (idContact) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await fetch(`${BASE_URL}/contacts/${idContact}`, {
      method: "DELETE",
    });
    dispatch(deleteContactSuccses(idContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

//====================== ADD ======================
export const addContact = (text) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(text),
    headers: {
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

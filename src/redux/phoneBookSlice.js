import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchContacts } from 'servises/contactsApi/fetchContactsApi';
import { addNewContactsToDB } from 'servises/contactsApi/addContactsApi';
import { deleteContactUser } from '../servises/contactsApi/deleteContactApi';
import { updateContactUser } from 'servises/contactsApi/updateContactsApi';
import { messageObj } from '../helpers/settings';

const contactsState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      })
      .addCase(addNewContactsToDB.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addNewContactsToDB.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
        toast.success('The contact has been added successfully', messageObj);
      })
      .addCase(addNewContactsToDB.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      })
      .addCase(deleteContactUser.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContactUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const indexElem = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(indexElem, 1);
        toast.success('The contact has been deleted', messageObj);
      })
      .addCase(deleteContactUser.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      })
      .addCase(updateContactUser.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(updateContactUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const indexElem = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(indexElem, 1, action.payload);
        toast.success('The contact has been updated', messageObj);
      })
      .addCase(updateContactUser.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      });
  },
});

export const Reducer = phoneBookSlice.reducer;

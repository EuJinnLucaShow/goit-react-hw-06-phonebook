import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const isContactExist = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isContactExist) {
          alert(`User with name ${action.payload.name} is already in contacts`);
          return;
        }
        const isNumberExist = state.find(
          contact =>
            contact.number.replace(/\D/g, '') ===
            action.payload.number.replace(/\D/g, '')
        );
        if (isNumberExist) {
          alert(`Number ${action.payload.number} is already in contacts`);
          return;
        }

        state.push(action.payload);
      },

      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

    deleteAllContacts: state => {
      state.splice(0, state.length);
    },

    sortContacts: state => {
      state.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts, sortContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

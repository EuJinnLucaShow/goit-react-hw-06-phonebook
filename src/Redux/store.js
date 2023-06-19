import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: {
    status: 'all',
  },
};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = (state = initialContacts, action) => {
  return state;
};

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

export const store = configureStore({ reducer: rootReducer, enhancer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

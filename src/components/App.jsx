import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, Title, Heading2 } from './App.styled';
  
const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

function App() {

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? (initialContacts)
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {

      const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${newContact.name} already exists!`,
        'Ok'
      );      
      return;
    }
    
  setContacts((prevContacts) => [...prevContacts, newContact]);  
};

const deleteContact = (id) => {
  setContacts((prevContacts) =>
    prevContacts.filter((contact) => contact.id !== id)
  );  
};

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook📱</Title>
      <ContactForm addContact={addContact} contacts={contacts} />

      <Heading2>Contacts</Heading2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;

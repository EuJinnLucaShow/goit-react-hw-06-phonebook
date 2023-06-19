import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Heading2 } from './App.styled';

function App() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <Container>
      <Title>Phonebook📱</Title>
      <ContactForm handleSubmit={handleSubmit} />

      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

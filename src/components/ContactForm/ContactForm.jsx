import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactsSlice';

import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
import { Form, Input, Text, Button } from './ContactForm.styled';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        const
        phonePattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <Button type="submit">
        <AddIcon />
      </Button>
    </Form>
  );
}

export default ContactForm;

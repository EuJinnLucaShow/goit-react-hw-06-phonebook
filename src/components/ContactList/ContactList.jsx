import React from 'react';
import ContactItem from '../ContactItem/ContactItem'

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
}

export default ContactList
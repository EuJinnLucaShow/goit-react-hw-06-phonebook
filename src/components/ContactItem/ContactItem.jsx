import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../icons/minus-user.svg';
import { ContactItems, ContactName, ContactNumber, Button } from './ContactItem.styled'

function ContactItem({ contact, deleteContact }) {
    const handleDelete = () => {
        deleteContact(contact.id);
    };
    return (
        <ContactItems>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <Button onClick={handleDelete}><AddIcon /></Button>
        </ContactItems>
    );
}
    ContactItem.propTypes = {
        contact: PropTypes.object.isRequired,
        deleteContact: PropTypes.func.isRequired,
};
    
    export default ContactItem
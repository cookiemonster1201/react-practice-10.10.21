import React from 'react';

import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
          id={contact.id}
        />
      ))}
    </ul>
  );
}

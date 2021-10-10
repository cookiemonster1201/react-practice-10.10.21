import React from 'react';

export default function ContactListItem({ name, number, onDelete, id }) {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button id={id} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
}

export default function filterContacts(contacts, value) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.trim().toLowerCase()),
  );
}

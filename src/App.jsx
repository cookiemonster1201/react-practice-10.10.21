import { Component } from 'react';
import shortid from 'shortid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import filterContacts from 'utils/filter-contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    this.setState({ contacts: contacts ?? this.state.contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: shortid.generate(),
          ...contact,
        },
      ],
    }));
  };

  handleDelete = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleStateChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter onChange={this.handleStateChange} value={this.state.filter} />
        <ContactList
          onDelete={this.handleDelete}
          contacts={filterContacts(this.state.contacts, this.state.filter)}
        />
      </>
    );
  }
}

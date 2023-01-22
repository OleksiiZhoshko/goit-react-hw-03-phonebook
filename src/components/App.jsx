import { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import Comtacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './ContactsFilter/ContactsFilter';

// const INITIAL_STATE = {
//   contacts: [],
//   filter: '',
// };

export class App extends Component {
  state = { 
    contacts: [],
    filter:'',
  };

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`Sorry, ${name} is already in contacts.`)
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts !== null) {
      const parseContacts = JSON.parse(saveContacts);
      this.setState({ contacts: parseContacts });
    }
    else {
      this.setState({contacts: this.state.contacts})
    }
}

  render() {
    const { contacts, filter } = this.state;
    let filterInputContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <h1>Phone book</h1>

        <PhoneBook onHendleCenge={this.addContact} />

        <h2>Contacts</h2>

        <Filter filter={filter} onFilterInput={this.filterContacts} />
        <Comtacts contacts={filterInputContacts} onDeleteContacts={this.deleteContacts}
        />
      </>
    );
  }
}

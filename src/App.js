import React, { Component } from 'react';
import Form from './components/ContactForm/FormInput';
import ContactsLIst from './components/ContacnList/SaveContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(e => e.number === data.number)) {
      alert('Such a number exists in contacts.');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, data],
      }));
    }
  };

  handleChangeFilterField = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleFilterContacts = () =>
    this.state.contacts.filter(e =>
      e.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(e => e.id !== id) });
  };

  render() {
    const visibleContacts = this.handleFilterContacts();
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactsLIst
          contacts={visibleContacts}
          filterField={this.state.filter}
          handleChangeFilterField={this.handleChangeFilterField}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </>
    );
  }
}

export default App;

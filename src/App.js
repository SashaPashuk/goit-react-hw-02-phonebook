import React, { Component } from 'react';
import Form from './components/Form/FormInput';
import SaveContacns from './components/Contacns/SaveContacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data)
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <SaveContacns />
      </>
    );
  }
}

export default App;

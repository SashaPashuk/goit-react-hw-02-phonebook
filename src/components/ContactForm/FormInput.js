import React, { Component } from 'react';
import s from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeFormFields = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.length > 0 && number.length > 0) {
      this.props.onSubmit({
        id: uuidv4(),
        ...this.state,
      });
      this.reset();
    } else {
      alert('Write all fields');
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={s.phonebook__form}>
        <h2 className={s.form__title}>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeFormFields}
            />
          </label>
          <label>
            Contact:
            <br />
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChangeFormFields}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;

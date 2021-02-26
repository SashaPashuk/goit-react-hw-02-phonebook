import React, { Component } from 'react';
import s from './Contacts.module.scss';

const ContactsLIst = ({ contacts,  filterField, handleChangeFilterField, handleDeleteContacts }) => (
  <>
    <h2>Contacts</h2>
    <h3>Find contacts by name</h3>
    <input
      value={filterField}
      onChange={handleChangeFilterField}
    />
    <ul className={s.SaveContactList}>
      {contacts.map(e => (
        <li className={s.SaveContactItem} key={e.id}>
          <span>{e.name}</span>: <span>{e.number}</span>
          <button onClick={() => handleDeleteContacts(e.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
export default ContactsLIst;

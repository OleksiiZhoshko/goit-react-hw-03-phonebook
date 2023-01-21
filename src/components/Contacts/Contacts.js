import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContacts}) => (
    <ul className={css.box}>
        {contacts.map(({ id, name, number, }) => (
            <li className={css.list} key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button className={css.button} type='button' onClick={()=>onDeleteContacts(id)}>Delete</button>
            </li>
        ))}
        </ul>
)

export default Contacts;
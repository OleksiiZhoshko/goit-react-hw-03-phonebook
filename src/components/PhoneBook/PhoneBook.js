import React from 'react';
import css from './PhoneBook.module.css';

const PhoneBook = ({onHendleCenge}) => {
  const hendleCenge = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onHendleCenge(name.value, number.value);
    name.value = '';
    number.value = '';
  };

  return (
    <form className={css.wrapper} onSubmit={hendleCenge}>
      <label className={css.wrapper__name}>
        Name  
        <input
          className={css.input__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.wrapper__name}>
        Number
        <input
          className={css.input__namber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button } type="submit">Add contact</button>
    </form>
  );
};

export default PhoneBook;
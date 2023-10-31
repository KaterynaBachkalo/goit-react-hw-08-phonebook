import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isExistContactName = contacts?.some(contact => name === contact.name);

    if (isExistContactName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));

    setName('');
    setPhone('');
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.title}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.title}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
          minlength="6"
          maxlength="10"
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

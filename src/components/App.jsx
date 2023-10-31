import Filter from './Filter/Filter';
import { ReactComponent as IconPhone } from '../../src/img/icon-phonebook.svg';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="phonebook-wrapper">
        <div className="phonebook-wrap">
          <IconPhone />
          <h1 className="phonebook-title">Phonebook</h1>
        </div>
        <ContactForm />
      </div>

      <h2 className="contacts-title">Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {error && <p className="error">{error}</p>}
      {!isLoading &&
        filteredContacts?.map(({ name, id, phone }) => (
          <ContactItem
            name={name}
            id={id}
            key={id}
            phone={phone}
            deleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

export default ContactList;

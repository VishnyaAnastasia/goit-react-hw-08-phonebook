import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/contacts-operations';

import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

import Loader from 'components/Loader/Loader';

import styles from './Contacts.module.css';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return isLoading && contacts.length === 0 ? (
    <Loader />
  ) : (
    <ul>
      {filteredContacts.map(({ id, number, name }) => (
        <li className={styles.contactInfo} key={id}>
          <div className={styles.contactLine}>
            {name}: {number}
          </div>
          <button
            className={styles.btnDelete}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

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
import { Section } from 'components/Section/Section';
import { Card, CardActions, IconButton } from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
    <Section>
      <ul className={styles.contactsList}>
        {filteredContacts.map(({ id, number, name }) => (
          <li key={id}>
            <Card sx={{ maxWidth: 345 }} className={styles.contactCard}>
              <div className={styles.contactsInfo}>
                <p>{name}</p>
                <p>{number}</p>
              </div>
              <CardActions disableSpacing className={styles.contactsActions}>
                <IconButton onClick={() => dispatch(deleteContact(id))}>
                  <DeleteOutlineIcon />
                </IconButton>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};

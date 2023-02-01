import { Box, Button, Container, TextField } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';

Notify.init({
  useIcon: false,
  fontSize: '20px',
  position: 'right-top',
  width: '350px',
  height: '35px',
  clickToClose: true,
});

export const Phonebook = ({ id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const inputHandler = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }

    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    const rename = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
    if (rename) {
      Notify.warning(`Oppps.. ${name} is already in contacts`);
      event.target.reset();
      return;
    }

    const newContact = { id: id, name: name, number: number };

    dispatch(addContact(newContact));
    event.target.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            onInput={inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Anastasia Vishnyakova"
            required
            margin="normal"
            fullWidth
            id="name"
          ></TextField>
          <TextField
            onInput={inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="555-05-55"
            required
            margin="normal"
            fullWidth
            id="tel"
          ></TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SAVE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

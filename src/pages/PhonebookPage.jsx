import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';

const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <Phonebook />
      {contacts.length > 0 && <Filter />}
      <Contacts />
    </>
  );
};

export default PhonebookPage;

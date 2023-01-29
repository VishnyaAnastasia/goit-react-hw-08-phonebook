import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';
import { filterContacts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch(selectFilter);

  return (
    <label>
      <input
        className={styles.inputView}
        onInput={event => {
          dispatch(filterContacts(event.target.value));
        }}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </label>
  );
};

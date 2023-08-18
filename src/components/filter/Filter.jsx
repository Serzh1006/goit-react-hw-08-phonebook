import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { selectFilter } from 'redux/selectors';
import { filterByName } from 'redux/filterSlice';
import css from './filter.module.css';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.filterLabel}>
      Find contacts by Name
      <Input
        placeholder="Enter name"
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(filterByName(e.target.value))}
      />
    </label>
  );
};

export default Filter;

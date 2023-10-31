import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Icon } from '../../img/search.svg';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={filterChange}
        placeholder="Find contact by name"
      />
      <Icon className={css.icon} />
    </label>
  );
};

export default Filter;

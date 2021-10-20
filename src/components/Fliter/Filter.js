import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={filter}
      ></input>
    </label>
  );
};

Filter.protoType = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;

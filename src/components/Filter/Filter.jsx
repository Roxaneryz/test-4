import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
export const Filter = () => {
  const dispach = useDispatch();
  const handleChange = e => {dispach(setFilter(e.target.value.toLowerCase()))}
  return (
    <input
    type='text'
    onChange={handleChange}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};

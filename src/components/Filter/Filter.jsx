import { useDispatch } from "react-redux";
import classNames from "classnames";

import { changeFilterAction } from "../../store/filterReducer";
import styles from "./Filter.module.css";

export const Filter = ({ id, value, checked }) => {
  const dispatch = useDispatch();
  function changeCheckbox() {
    dispatch(changeFilterAction(id));
  }

  return (
    <label
      className={classNames(
        styles.container,
        checked ? styles.container_checked : ""
      )}>
      <span
        className={classNames(
          styles.flag,
          checked ? styles.flag_checked : ""
        )}></span>
      <input
        className={classNames(styles.input)}
        type="checkbox"
        checked={checked}
        onChange={changeCheckbox}
      />
      {value}
    </label>
  );
};

export default Filter;

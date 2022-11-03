import styles from "./filter.module.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { changeFilterAction } from "../../store/filterReducer";

export const Filter = ({ id, value, checked }) => {
  const dispatch = useDispatch();
  function changeCheckbox() {
    dispatch(changeFilterAction(id));
  }

  return (
    <label
      className={classNames(
        styles.container,
        checked ? styles._container_checked : ""
      )}>
      <span
        className={classNames(
          styles._flag,
          checked ? styles._flag_checked : ""
        )}></span>
      <input
        className={classNames(styles._input)}
        type="checkbox"
        checked={checked}
        onChange={changeCheckbox}
      />
      {value}
    </label>
  );
};

export default Filter;

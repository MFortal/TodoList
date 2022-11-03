import styles from "./input.module.css";
import classNames from "classnames";

export const Input = ({
  nameInput,
  nameText,
  valueText,
  valueInput,
  placeholderInput,
  placeholderText,
  ...props
}) => {
  return (
    <div className={classNames(styles.container)}>
      <input
        placeholder={placeholderInput}
        type="text"
        name={nameInput}
        value={valueInput}
        {...props}
        className={classNames(styles._input)}
      />

      <textarea
        placeholder={placeholderText}
        className={classNames(styles._input, styles._textarea)}
        type="text"
        name={nameText}
        value={valueText}
        {...props}
      />
    </div>
  );
};

export default Input;

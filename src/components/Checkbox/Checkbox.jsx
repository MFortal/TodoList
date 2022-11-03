import { Field } from "formik";
import { Tag } from "../Tag/Tag";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className={classNames(styles.container)}>
          <div className={classNames(styles._tag)}>
            <Tag flagColor={props.tag} />
          </div>
          <input
            className={classNames(styles._input)}
            type="checkbox"
            {...props}
            checked={field.value?.includes(props.value)}
            onChange={() => {
              if (field.value?.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          <span className={classNames(styles._flag)}></span>
        </label>
      )}
    </Field>
  );
};

export default Checkbox;

import { useSelector } from "react-redux";
import classNames from "classnames";
import { tagsSelector } from "../../store/selectors";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./Multiselect.module.css";

export const Multiselect = () => {
  const tags = useSelector(tagsSelector);

  const listTags = tags.map((tag, index) => (
    <div className={classNames(styles.elem)} key={index}>
      <Checkbox name="tags" value={tag} tag={tag} key={index} />
    </div>
  ));

  return (
    <details className={classNames(styles.details)}>
      <summary className={classNames(styles.summary)}>Выбрать тег</summary>
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.elems)}>{listTags}</div>
      </div>
    </details>
  );
};

export default Multiselect;

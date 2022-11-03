import { useSelector } from "react-redux";
import classNames from "classnames";
import { tagsSelector } from "../../store/selectors";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./Multiselect.module.css";

export const Multiselect = () => {
  const tags = useSelector(tagsSelector);

  const listTags = tags.map((tag, index) => (
    <>
      <Checkbox name="tags" value={tag} tag={tag} key={index} />
    </>
  ));

  const elems = [];
  for (let i = 0; i < listTags.length; i++) {
    elems.push(
      <div className={classNames(styles.elem)} key={i}>
        {listTags[i]}
      </div>
    );
  }

  return (
    <details className={classNames(styles.details)}>
      <summary className={classNames(styles.summary)}>Выбрать тег</summary>
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.elems)}>{elems}</div>
      </div>
    </details>
  );
};

export default Multiselect;

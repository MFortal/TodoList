import styles from "./Multiselect.module.css";
import classNames from "classnames";
import Checkbox from "../Checkbox/Checkbox";
import { useSelector } from "react-redux";
import { tagsSelector } from "../../store/selectors";

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
      <div className={classNames(styles._elem)} key={i}>
        {listTags[i]}
      </div>
    );
  }

  return (
    <details className={classNames(styles._details)}>
      <summary className={classNames(styles._summary)}>Выбрать тег</summary>
      <div className={classNames(styles._container)}>
        <div className={classNames(styles._elems)}>{elems}</div>
      </div>
    </details>
  );
};

export default Multiselect;

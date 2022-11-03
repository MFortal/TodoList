import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./NotFoundPage.module.css";
import pathIcon from "../../icons/notfound.svg";

export const NotFoundPage = () => {
  return (
    <div className={classNames(styles.container)}>
      <img alt="404" src={pathIcon}></img>
      <p>Страница не найдена</p>
      <NavLink to={`/TodoList`} id="2">
        <p className={classNames(styles.container_back)}>На главную</p>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;

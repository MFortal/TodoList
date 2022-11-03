import classNames from "classnames";
import styles from "./notFoundPage.module.css";
import pathIcon from "../../icons/notfound.svg";
import { NavLink } from "react-router-dom";

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

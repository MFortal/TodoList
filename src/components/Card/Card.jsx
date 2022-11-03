import styles from "./Card.module.css";
import classNames from "classnames";
import pathComment from "../../icons/comment.svg";
import pathDescription from "../../icons/description.svg";
import Tag from "../Tag/Tag";
import { useSelector } from "react-redux";
import { cardSelector } from "../../store/selectors";
import { NavLink } from "react-router-dom";

export const Card = ({ id }) => {
  const card = useSelector(cardSelector).find((c) => c.id === id);

  return (
    <>
      <NavLink to={`/TodoList/edit/${card.id}`} id="1">
        <div className={classNames(styles.container)}>
          <div className={classNames(styles._header)}>
            <p className={classNames(styles._header_name)}>{card.name}</p>
            <NavLink to={`/TodoList/tiket/${card.id}`} id="2">
              <div className={classNames(styles._header_btn)}>
                <span className={classNames(styles._header_btnElem)}></span>
                <span className={classNames(styles._header_btnElem)}></span>
                <span className={classNames(styles._header_btnElem)}></span>
              </div>
            </NavLink>
          </div>
          <div className={classNames(styles._main)}>
            <div className={classNames(styles._main_tags)}>
              {card.tags?.map((tag, index) => {
                return (
                  <div
                    className={classNames(styles._container_tag)}
                    key={index}>
                    <Tag flagColor={tag} />
                  </div>
                );
              })}
            </div>
            <div className={classNames(styles._main_icons)}>
              {card.description?.length > 0 ? (
                <img src={pathDescription} alt="" />
              ) : null}
              {card.comments?.length > 0 ? (
                <div className={classNames(styles._main_comment)}>
                  <img src={pathComment} alt="" />
                  <span className={classNames(styles._main_comment_length)}>
                    {card.comments.length}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;

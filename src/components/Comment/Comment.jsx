import styles from "./Comment.module.css";
import classNames from "classnames";
import pathCloseImg from "../../icons/close.svg";
import { useDispatch } from "react-redux";
import { removeCommentAction } from "../../store/cardReducer";

export const Comment = ({ name, text, cardId, commentId }) => {
  const dispatch = useDispatch();
  const removeComment = () => {
    dispatch(removeCommentAction({ cardId, commentId }));
  };

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.header)}>
        <p className={classNames(styles.header_name)}>{name}</p>
        <img
          src={pathCloseImg}
          alt="close"
          className={classNames(styles.header_close)}
          onClick={() => removeComment()}
        />
      </div>
      <p className={classNames(styles.text)}>{text}</p>
    </div>
  );
};

export default Comment;

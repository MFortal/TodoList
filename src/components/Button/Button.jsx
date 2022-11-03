import styles from "./button.module.css";
import classNames from "classnames";
import pathImg from "../../icons/plus.svg";
import { useNavigate } from "react-router-dom";

export const Button = ({ value, flagPlus, boardId }) => {
  const navigate = useNavigate();

  const onClick = () =>
    flagPlus
      ? navigate("/TodoList/create", { state: { boardId: boardId } })
      : null;

  return (
    <>
      <button
        className={classNames(styles.container)}
        onClick={onClick}
        type="submit">
        {flagPlus && <img alt="" src={pathImg} />}
        {value}
      </button>
    </>
  );
};

export default Button;

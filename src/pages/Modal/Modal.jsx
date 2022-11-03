import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import classNames from "classnames";

const Modal = (props) => {
  const { active } = props;

  const element = useMemo(() => document.createElement("div"), []);
  const modalElement = useMemo(() => document.querySelector("#modal"), []);

  useEffect(() => {
    if (active) {
      modalElement.appendChild(element);
      return () => {
        modalElement.removeChild(element);
      };
    }
  });

  return createPortal(
    <div className={classNames(styles.modal)}>{props.children}</div>,
    element
  );
};

export default Modal;

import classNames from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({ flagColor }) => {
  let tagClass;

  switch (flagColor) {
    case "violet":
      tagClass = styles.violet;
      break;
    case "red":
      tagClass = styles.red;
      break;
    case "green":
      tagClass = styles.green;
      break;
    case "orange":
      tagClass = styles.orange;
      break;
    case "blue":
      tagClass = styles.blue;
      break;
    case "darkBlue":
      tagClass = styles.darkBlue;
      break;
    case "yellow":
      tagClass = styles.yellow;
      break;
    case "lightGreen":
      tagClass = styles.lightGreen;
      break;
    default:
      tagClass = "";
  }

  return <div className={classNames("op", styles.tag, tagClass)} />;
};

export default Tag;

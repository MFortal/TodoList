import styles from "./Tag.module.css";
import classNames from "classnames";

export const Tag = ({ flagColor }) => {
  let tagClass;

  switch (flagColor) {
    case "violet":
      tagClass = styles._violet;
      break;
    case "red":
      tagClass = styles._red;
      break;
    case "green":
      tagClass = styles._green;
      break;
    case "orange":
      tagClass = styles._orange;
      break;
    case "blue":
      tagClass = styles._blue;
      break;
    case "darkBlue":
      tagClass = styles._darkBlue;
      break;
    case "yellow":
      tagClass = styles._yellow;
      break;
    case "lightGreen":
      tagClass = styles._lightGreen;
      break;
    default:
      tagClass = "";
  }

  return <div className={classNames("op", styles.tag, tagClass)} />;
};

export default Tag;

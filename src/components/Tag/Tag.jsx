import clsx from "clsx";
import {BodyCopy, Label} from "../Typography/Typography";
import "./Tag.scss";

const Tag = ({ children, isSelected, corner, clickable, big }) => {
  const tagClassName = clsx("tag", {
    "tag--selected": isSelected,
    "tag--corner": corner,
    "tag--clickable": clickable,
  });
  const Size = big ? BodyCopy : Label;

  return( <span className={tagClassName}><Size>{children}</Size></span>);
  };

  export default Tag;
import clsx from "clsx";
import {BodyCopy, Label} from "../Typography/Typography";
import "./Tag.scss";

 function Tag({ children, isSelected, corner, clickable, big })=> {
  const tagClassName = clsx("tag", {
    "tag--selected": isSelected,
    "tag--corner": corner,
    "tag--clickable": clickable,});

    const Size = big ? BodyCopy : Label;
  return( <span className={tagClassName}><size>{children}</size></span>);
  }
  export default Tag;
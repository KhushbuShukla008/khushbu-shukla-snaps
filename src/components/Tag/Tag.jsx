import clsx from "clsx";
import {BodyCopy, Label} from "../Typography/Typography";
import "./Tag.scss";

const Tag = ({ tag, children, isSelected, corner, clickable, big, pagetype, selectedTag, setCount}) => {
  const tagClassName = clsx("tag", {
    "tag--selected": isSelected || selectedTag === Tag,
    "tag--corner": corner,
    "tag--clickable": clickable,
    [pagetype]: pagetype,
  });
  const Size = big ? BodyCopy : Label;

  const handleClick = () => {
    if (clickable && setCount) {
      setCount((count) => count + 1);
    }
  };

  return(
    <button onClick={handleClick} className={tagClassName}>
    <Size>{children || tag}</Size>
  </button>
);
}

  export default Tag;
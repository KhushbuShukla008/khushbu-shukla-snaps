import { Label } from "../Typography/Typography";
import "./Tag.scss";

function Tag({ tag, isClickable = false, selectedTag, setCount }) {
  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
      }}
      className={`tag ${isClickable ? "tag--clickable" : ""} ${selectedTag === tag ? "tag--selected" : ""}`}
    >
      <Label>{tag}</Label>
    </button>
  );
}

export default Tag;

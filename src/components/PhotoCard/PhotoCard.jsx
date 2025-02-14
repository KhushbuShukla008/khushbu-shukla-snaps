import { useState } from "react";
import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

function PhotoCard({ photo, setGlobalCounter }) {
  console.log(photo.photographer);

  const [count, setCount] = useState(0);

  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
        <div className="photo__photographer">{photo.photographer}</div>
      </div>
      <div className="photo__tags">
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
        ))}
      </div>
      <div className="photo__counter">
        Local counter:
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </div>
  );
}

export default PhotoCard;

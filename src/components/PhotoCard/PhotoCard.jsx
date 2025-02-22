import Tag from "../Tags/Tags";
import "./PhotoCard.scss";
import { useNavigate } from "react-router-dom";

function PhotoCard({ photo, setGlobalCounter }) {
  console.log(photo.photographer);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photo/${photo.id}`);
  };

  return (
    <div className="photo" onClick={handleClick}>
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
        <div className="photo__photographer">{photo.photographer}</div>
      </div>
      <div className="photo__tags">
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
        ))}
      </div>
      
    </div>
  );
}

export default PhotoCard;

import Tag from "../Tag/Tag";
import "./PhotoCard.scss";
import { useNavigate } from "react-router-dom";

function PhotoCard({ photo, setGlobalCounter, pageType}) {
  console.log(photo.photographer);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photo/${photo.id}`);
  };

  return (
    <div className={`photo ${pageType === 'homepage' ? 'photo--homepage' : 'photo--detail'}`} onClick={handleClick}>
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
        <div className="photo__photographer">{photo.photographer}</div>
      </div>
      <div className={`photo__tags ${pageType === 'homepage' ? 'photo__tags--homepage' : 'photo__tags--detail'}`}>
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
        ))}
      </div>
      
    </div>
  );
}

export default PhotoCard;

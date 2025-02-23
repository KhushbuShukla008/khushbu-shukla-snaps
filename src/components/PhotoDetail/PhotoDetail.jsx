import Tag from "../Tag/Tag";
import likeOutline from "../../assets/icons/Like_Outline.svg";
import "./PhotoDetail.scss";
import React, {useState} from "react";
import likeFilled from "../../assets/icons/Like_Filled.svg";

const PhotoDetail = ({ photo: data }) => {
  if (!data) return <div className="photo__loading">loading photo...</div>;

  const { photo, tags, photoDescription, likes, photographer, timestamp } = data;
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  
  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className=" photo photo--large">
      <div className="photo__details">
        <img className="photo__image" src={photo} alt={photoDescription} />
      </div>
      <div className="photo__meta">
        <div className="photo__tags photo__tags--detail">
          {tags.map((tag) => (
            <Tag key={tag} big>
              {tag}
            </Tag>
          ))}
        </div>
        <div className="photo-info">
        <div className="photo-info__top">
          <span className="photo-info__likes" onClick={handleLikeClick}>
            <img src={isLiked ? likeFilled : likeOutline} alt="heart" />
            {likeCount} likes
          </span>
          <span className="photo-info__photographer">
            Photo by {photographer}
          </span>
          </div>
          <span className="photo-info__time">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;

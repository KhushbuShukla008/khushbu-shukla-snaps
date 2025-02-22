import Tag from "../Tag/Tag";
import likeOutline from "../../assets/icons/Like_Outline.svg";
import "./PhotoDetail.scss";

const PhotoDetail = ({photo: data}) =>{
    if (!data) return <div className="photo__loading">loading photo...</div>;

    const {photo, tags, photoDescription, likes, photographer, timestamp} = data;
    return(
        <div className=" photo photo--large">
            <div className="photo__details">
                <img className="photo__image" src={photo} alt={photoDescription}/>
            </div>
            <div className="photo__meta">
                <div className="photo__tags">
                    {tags.map((tag) => (
                    <Tag key={tag} big>{tag}</Tag>
                    ))}
                </div>
                <div className="photo-info">
                    <span className="photo-info__likes">
                        <img src={likeOutline} alt="heart"/>
                        {likes} likes
                    </span>
                    <span className="photo-info__photographer">Photo by {photographer}</span>
                    <span className="photo-info__time">{new Date(timestamp).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetail;
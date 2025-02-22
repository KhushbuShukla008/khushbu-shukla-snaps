import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoList.scss";

const PhotoList=({filteredPhotos, setCount}) => {
    return(
        <div className="photo-list">
          {filteredPhotos.map((photo) => {
            return <PhotoCard photo={photo} key={photo.id} setGlobalCounter={setCount} />;
          })}
        </div>
    );
};

export default PhotoList;
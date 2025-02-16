import PhotoCard from "../PhotoCard/PhotoCard";

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
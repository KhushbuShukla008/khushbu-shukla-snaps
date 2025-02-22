import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tag from "../components/Tag/Tag";

function Home() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    const { data } = await axios.get(
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e"
    );
    setPhotos(data);
  }

  if (!photos) {
    return <div>loading...</div>;
  }

  return (
    <div className="photos">
      home
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="photo">
            <Link key={photo.id} to={`/photo/${photo.id}`} className="photo__link">
              {photo.photoDescription}
            </Link>
            <Tag>{photo.photographer}</Tag>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
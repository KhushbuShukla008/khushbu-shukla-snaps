import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://unit-3-project-c5faaab51857.herokuapp.com/photos")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  return (
    <div className="homepage">
      <h1>Photo Gallery</h1>
      <div className="photos">
        {photos.map((photo) => (
          <Link key={photo.id} to={`/photo/${photo.id}`}>
            <img src={photo.url} alt={photo.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

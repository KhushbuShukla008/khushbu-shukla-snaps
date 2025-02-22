import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterButton from "../components/FilterButton/FilterButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FilterDrawer from "../components/FilterDrawer/FilterDrawer";
import PhotoList from "../components/PhotoList/PhotoList";
import Tags from "../components/Tags/Tags";
import "./Home.scss";
import NavHeader from "../components/NavHeader/NavHeader";

function Home() {
  const [photos, setPhotos] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchPhotos();
    fetchTags();
  }, []);

  async function fetchPhotos() {
    const { data } = await axios.get(
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e"
    );
    setPhotos(data);
  }
  async function fetchTags() {
    const { data } = await axios.get(
      "https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e"
    );
    setTags(data);
  }

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  if (!photos) {
    return <div>loading...</div>;
  }

  return (
    <div className="app">
      <NavHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} isHomePage={true} />
      <div className="main__body">
        <div className="app__content">
          <FilterDrawer
            tags={tags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            setCount={setCount}
            drawerOpen={drawerOpen}
          />
        </div>
        <div className={`app__body ${drawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
          <Header />
          <div className={`photo-list ${drawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
            <PhotoList filteredPhotos={filteredPhotos} setCount={setCount} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
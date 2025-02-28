import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FilterDrawer from "../components/FilterDrawer/FilterDrawer";
import PhotoList from "../components/PhotoList/PhotoList";
import "./Home.scss";
import NavHeader from "../components/NavHeader/NavHeader";

function Home() {
  const [photos, setPhotos] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchPhotos();
    fetchTags();
  }, [API_BASE_URL]);

  async function fetchPhotos() {
    const { data } = await axios.get(`${API_BASE_URL}/photos`);
    setPhotos(data);
  }
  
  async function fetchTags() {
    const { data } = await axios.get(`${API_BASE_URL}/tags`);
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
      <section className="main__body">
        <div className="app__content">
          <FilterDrawer
            tags={tags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            setCount={setCount}
            drawerOpen={drawerOpen}
          />
        </div>
        <section className={`app__body ${drawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
          <Header />
          <div className={`photo-list ${drawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
            <PhotoList filteredPhotos={filteredPhotos} setCount={setCount} pageType="homepage"/>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
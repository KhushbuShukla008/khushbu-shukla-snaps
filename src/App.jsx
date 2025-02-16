import { useState } from "react";
import tags from "./data/tags.json";
import photos from "./data/photos.json";
import "./App.scss";
import FilterButton from "./components/FilterButton/FilterButton";
import Header from "./components/Header/Header";
import Footer from "./components/footer/footer";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import PhotoList from "./components/Photolist/PhotoList";


function App() {
  console.log("render App comp");
  const [selectedTag, setSelectedTag] = useState(null);
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

  return (
    <div className="app">
      <div className="app__nav-container"></div>
      <h1 className="app__header">Snaps</h1>
      <div className="app__filter">
        <FilterButton drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />  
      </div>
      <div className="app__content">
      <FilterDrawer tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} setCount={setCount} drawerOpen={drawerOpen} />
      </div>
      <Header />
      <div className="app__photo-list">
        <PhotoList filteredPhotos={filteredPhotos} setCount={setCount} />
      </div>
      <Footer />
    </div>   
  );
}

export default App;

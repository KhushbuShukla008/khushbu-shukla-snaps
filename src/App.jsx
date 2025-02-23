
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


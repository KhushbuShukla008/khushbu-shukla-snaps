import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "../components/Tag/Tag";
import Comments from "../components/Comments/Comments";
import "./Photo.scss";
import Footer from "../components/Footer/Footer";
import NavHeader from "../components/NavHeader/NavHeader";
import PhotoDetail from "../components/PhotoDetail/PhotoDetail";

function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, []);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setPhoto(data);
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setComments(data);
  }

  const handleCommentSubmit = async (comment) => {
    const {data} = await axios.post(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`, 
    { text: newComment },
    {
      headers: {
        "Content-Type": "application/json",
        "api_key": "1c1459ab-a5fe-4f24-a3d6-a9b6f153981e"
      }
    }
  );
    setComments([data, ...comments]);
    setNewComment('');
  };

  if (!photo || !comments) {
    return <div>loading...</div>;
  }

  return (
    <div className="photo-page">
      <NavHeader drawerOpen={false} setDrawerOpen={() => {}} isHomePage={false} />
      <div className="photo-detail-container">
        <PhotoDetail photo={photo} />
      </div>
      <div className="comments-section">
        <Comments id={id} />
      </div>
      <Footer />
    </div>
  );
}

export default Photo;
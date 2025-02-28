import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, [API_BASE_URL, id]);

  async function fetchPhoto() {
    const { data } = await axios.get(`${API_BASE_URL}/photos/${id}`);
    setPhoto(data);
  }

  async function fetchComments() {
    const { data } = await axios.get(`${API_BASE_URL}/photos/${id}/comments`);
    setComments(data);
  }

  const handleCommentSubmit = async (comment) => {
    const {data} = await axios.post(`${API_BASE_URL}/photos/${id}/comments`, 
    { text: newComment },
    {
      headers: {
        "Content-Type": "application/json",
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
    <section className="photo-page">
      <NavHeader drawerOpen={false} setDrawerOpen={() => {}} isHomePage={false} />
      <div className="photo-detail-container">
        <PhotoDetail photo={photo} />
      </div>
      <div className="comments-section">
        <Comments id={id} comments={comments} handleCommentSubmit={handleCommentSubmit} newComment={newComment} setNewComment={setNewComment}/>
      </div>
      <Footer />
    </section>
  );
}

export default Photo;
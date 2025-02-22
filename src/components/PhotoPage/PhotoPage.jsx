import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PhotoPage(){
    const {id} = useParams();
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() =>{
        axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}`)
        .then(response => setPhoto(response.data))
        .catch(error => console.error('Error fetching photo:', error));
  
      axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`)
        .then(response => setComments(response.data))
        .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
    if (newComment.trim()) {
      axios.post(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`, { text: newComment })
        .then(response => {
          setComments([response.data, ...comments]);
          setNewComment('');
        })
        .catch(error => console.error('Error posting comment:', error));
    }
  };

  if (!photo) return <div>Loading...</div>;

  return (
    <div className="photo-page">
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <div className="comments">
        <h2>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoPage;
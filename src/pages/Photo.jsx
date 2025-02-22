import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "../components/Tag/Tag";
import Comments from "../components/Comments/Comments";

function Photo() {
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(() => {
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

  if (!photo || !comments) {
    return <div>loading...</div>;
  }

  return (
    <div>
      photo -- {id}
      <div> title:{photo.photoDescription}</div>
      <Comments />
      <div>num comments: {comments.length}</div>
      <Tag>{photo.photographer}</Tag>
      <div>
        <Link to="/">back</Link>
      </div>
      <Comments id={id} />
    </div>
  );
    // <div className="photo-page">
    //   <h1>{photo.photoDescription}</h1>
    //   <img src={photo.url} alt={photo.photoDescription} />
    //   <div>num comments: {comments.length}</div>
    //   <Tag>{photo.photographer}</Tag>
    //   <div className="comments">
    //     <h2>Comments</h2>
    //     <form onSubmit={handleCommentSubmit}>
    //       <input
    //         type="text"
    //         value={newComment}
    //         onChange={(e) => setNewComment(e.target.value)}
    //         placeholder="Add a comment"
    //         required
    //       />
    //       <button type="submit">Submit</button>
    //     </form>
    //     <ul>
    //       {comments.map(comment => (
    //         <li key={comment.id}>{comment.text}</li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div>
    //     <Link to="/">back</Link>
    //   </div>
    // </div>
}

export default Photo;
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import "./Comments.scss";
import CommentList from "../CommentList/CommentList";

export default function Comments({ id }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const URL = `${API_BASE_URL}/photos/${id}/comments`;

  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments();
  }, [id]);

  async function fetchComments() {
    try {
      const { data } = await axios.get(URL);
      const sortedComments = data.sort((a, b) => b.timestamp - a.timestamp);
      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  async function postComments(commentObj) {
    try {
      const { data } = await axios.post(URL, commentObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setComments([data, ...comments]);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  if (!comments) {
    return <div>loading...</div>;
  }

  return (
    <div className="comments-section">
      <Form postComments={postComments} />
      <CommentList comments={comments} />
    </div>
  );
}

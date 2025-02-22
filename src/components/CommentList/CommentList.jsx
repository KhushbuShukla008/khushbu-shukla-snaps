import "./CommentList.scss";

export default function CommentList({ comments }) {
  return (
    <div className="comments-list">
    {comments.map((comment, index) => (
    <div key={index} className="comment">
        <div className="comment-name">{comment.name}</div>
        <div className="comment-text">{comment.comment}</div>
        <div className="comment-date">{new Date(comment.timestamp).toLocaleString()}</div>
    </div>
      ))}
    </div>
  );
}

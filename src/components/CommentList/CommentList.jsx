import "./CommentList.scss";

export default function CommentList({ comments }) {
  return (
    <div className="comments-container">
      {comments.length > 0 && (
        <div className="comments-count">
          {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
        </div>
      )}      
    <div className="comments-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <hr className="divider" />
          <div className="comment__description">
            <div className="comment-name">{comment.name}</div>
            <div className="comment-date">
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
            </div>
          </div>
          <div className="comment-text">{comment.comment}</div>
        </div>
      ))}
    </div>
    </div>
  );
}
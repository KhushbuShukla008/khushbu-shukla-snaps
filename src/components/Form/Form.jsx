import { useState } from "react";
import "./Form.scss";

function Form({postComments}){
const [name, setName] = useState("");
const [comment, setComment] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
if (comment.trim() === "") {
alert("Please fill in the comment");
return;
}
postComments({ comment });
setComment("");
};
return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
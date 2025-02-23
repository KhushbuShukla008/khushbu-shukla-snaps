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
postComments({ name, comment });
setName("");
setComment("");
};
return (
        <form onSubmit={handleSubmit} className="comment-form">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="comment">Comment</label>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
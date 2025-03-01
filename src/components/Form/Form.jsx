import { useState } from "react";
import "./Form.scss";

function Form({postComments}){
const [name, setName] = useState("");
const [comment, setComment] = useState("");
const [touched, setTouched] = useState({ name: false, comment: false });

const handleSubmit = (e) => {
e.preventDefault();
if (name.trim() === "" || comment.trim() === "") {
alert("Please fill in all the fields");
return;
}
postComments({ name, comment });
setName("");
setComment("");
setTouched({ name: false, comment: false });
};
return (
        <form onSubmit={handleSubmit} className="comment-form">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                className={touched.name && name.trim() === "" ? "error" : ""}
            />
            <label htmlFor="comment">Comment</label>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, comment: true }))}
                className={touched.comment && comment.trim() === "" ? "error" : ""}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
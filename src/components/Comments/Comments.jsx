import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import "./Comments.scss";
import CommentList from "../CommentList/CommentList";

export default function Comments({ id }){
    const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`;
      
    const [comments, setComments] = useState([]);
    useEffect(() =>{
        fetchComments();
    }, []);

    async function fetchComments() {
        try{
        const {data} = await axios.get(URL);
        setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }      
    }
    
    async function postComments(commentObj) {
        try {
            const { data } = await axios.post(URL, commentObj, {
            headers: {
                "Content-Type": "application/json",
              }
            });
            setComments([data, ...comments]);
        } catch (error) {
            console.error("Error posting comment:", error);
          }
    }

    if(!comments){
        return<div>loading...</div>
    }

    return(
        <div className="comments-section">
         <Form postComments={postComments} />
         <CommentList comments={comments} />   
        </div>
    );
}
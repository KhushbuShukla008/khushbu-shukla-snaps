import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import commentList from "../CommentList/CommentList";

export default function Comments({id}){
    const URL = 'https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e';
    const [comments, setComments] = useState(null);
    useEffect(() =>{
        fetchComments();
    }, []);

    async function fetchComments() {
        const {data} = await axios.get(URL);
        setComments(data);
    }
    
    async function postComments(commentObj) {
         await axios.post(URL, commentObj);
        fetchComments();
    }

    if(!comments){
        return<div>loading...</div>
    }

    return(
        <div>
         <form postComments={postComments} />
         <commentList comments={comments} />   
        </div>
    );
}
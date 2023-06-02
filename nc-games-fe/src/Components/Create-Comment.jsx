import React, {useState} from "react";
import { postComment } from "./utils";

const CreateComment = ({review_id, setComments}) => {
    const [newComment, setNewComment] = useState("");

    const handleChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
    const newCommentTemplate = {
        username: "test_user",
        body: newComment,
        votes: 1,
    };


    postComment(review_id, newCommentTemplate)
    .then(() => {
        setComments((current) => {
                return {...current, comments: [newCommentTemplate, ...current.comments]
            }
        })
    })
    .then(() => {
        return setNewComment("");
    });

    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea
            value={newComment}
            onChange={handleChange}
            placeholder="Write your comment here..."
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateComment
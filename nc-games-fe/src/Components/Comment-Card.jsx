import React from "react";

const CommentCard = ( { comment } ) => {
    const { body, votes, author, review_id, created_at } = comment;

    return(
        <article className="comment-card">
        <h3 className="comment-header">{author}</h3>
        <p>Comment: {body}</p>
        <p>Votes: {votes}</p>
        <p>Comment ID: {review_id}</p>
        <p>Comment time: {created_at}</p>
        </article>
    )
}

export default CommentCard
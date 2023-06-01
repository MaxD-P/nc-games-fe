import React, { useState, useEffect } from "react";
import { fetchReviewComments } from "./utils";

const ReviewComments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviewComments(reviewId)
      .then((data) => {
        const { comments } = data;

        return Promise.all([
          setComments(comments),
          setIsLoading(false),
        ])
      })
  }, [reviewId]);

  if (isLoading) return <p>Loading comments...</p>;  

  return (
    <div>
      <h4 tabIndex="0">Comments:</h4>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment-box">
            <p className="comment-user">User: {comment.author}</p>
            <p className="comment-body">Comment: {comment.body}</p>
            <p className="comment-votes">Upvotes: {comment.votes}</p>
            <p className="comment-date">Timestamp: {comment.created_at}</p>
          </div>
        ))
      ) : (
        <p>No comments here yet!</p>
      )}
    </div>
  );
      }  
export default ReviewComments;

import React, { useState, useEffect } from "react";
import { fetchReviewComments } from "./utils";

const ReviewComments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasComments, setHasComments] = useState(false);

  useEffect(() => {
    fetchReviewComments(reviewId)
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
        setHasComments(data.comments.length > 0);
      });
  }, [reviewId]);

  if (isLoading) return <p>Loading comments...</p>;

  if (!hasComments) {
    return <p>No comments here yet!</p>
  }

  return (
    <div>
      <h4 tabIndex="0">Comments:</h4>
      {comments.map((comment) => (
  <div key={comment.comment_id} className="comment-box">
  <p className="comment-user">User: {comment.author}</p>
  <p className="comment-body">Comment: {comment.body}</p>
  <p className="comment-votes">Upvotes: {comment.votes}</p>
  <p className="comment-date">Timestamp: {comment.created_at}</p>
</div>
    ))}
    </div>
  );
};

export default ReviewComments;

import React from "react";

const ReviewCard = ( { review, showCommentCount = true }) => {
    const { title, designer, owner, review_img_url, category, created_at, votes, comment_count } = review;

    const formattedDate = new Date(created_at).toLocaleDateString();

    return (
      <article className="review-card">
        <figure className="review-image-container">
        <img src={review_img_url} alt={title} className="review-image" />
        </figure>
        <h2 className="review-title">{title}</h2>
        <section className="review-details">
          <p>
            <strong>Game Designer:</strong> {designer}
          </p>
          <p>
            <strong>Review User:</strong> {owner}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Review Date:</strong> {formattedDate}
          </p>
        </section>
        <p className="review-votes">Votes: {votes}</p>
        {showCommentCount && <p className="review-comments">Comments: {comment_count}</p>}
      </article>
    );
  };
  
  export default ReviewCard
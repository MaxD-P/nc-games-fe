import React, {useState, useEffect} from 'react';
import ReviewCard from './Review-Card';
import { fetchAllReviews } from './utils';
import { Link } from 'react-router-dom';

function AllReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllReviews()
        .then((data) =>{
        setReviews(data.reviews)
        setLoading(false)
        })
    }, [])
return (
  <div>
    <h1>All Reviews: </h1>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="review-list">
        {reviews.map((review) => (
          <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
            <ReviewCard review={review} />
          </Link>
        ))}
      </div>
    )}
  </div>
);
        }
export default AllReviews
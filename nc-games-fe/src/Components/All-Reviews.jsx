import React, {useState, useEffect} from 'react';
import ReviewCard from './Review-Card';
import { fetchAllReviews } from './utils';

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
    return(
<div>
      <h1>All Reviews: </h1>
      {loading? (
        <p>Loading...</p>
      ) : 
      <div className="review-list">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
}
    </div>
  )

}

export default AllReviews
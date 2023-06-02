import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewComments, fetchSingleReview } from "./utils";
import ReviewCard from "./Review-Card";
import ReviewComments from "./Review-Comments";
import VoteButton from "./Vote-Button";
import CreateComment from "./Create-Comment";

export const SingleReview = () => {
    const {review_id} = useParams()
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchSingleReview(review_id).then((data)=> {
            setReview(data)
            setIsLoading(false)
        })
        .then(() => {
            fetchReviewComments(review_id).then((data)=> {
                setComments(data)
            })
        })
    }, [review_id])

    if (isLoading) return <p>Loading...</p>
    return(
        <>
                <h1>Review:</h1>
    <section className="single-review">
        <ReviewCard review={review.review} voteState={votes} showCommentCount={false}/>
        <VoteButton reviewId={review.review.review_id} votes={votes} setVotes={setVotes} />
    </section>
    <CreateComment review_id={review.review.review_id} setComments={setComments} />
    <ReviewComments reviewId={review.review.review_id} comments={comments} />
        </>
    )
}

export default SingleReview
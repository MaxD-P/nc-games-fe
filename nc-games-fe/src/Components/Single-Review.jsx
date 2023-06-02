import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "./utils";
import ReviewCard from "./Review-Card";
import ReviewComments from "./Review-Comments";
import VoteButton from "./Vote-Button";

export const SingleReview = () => {
    const {review_id} = useParams()
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        fetchSingleReview(review_id).then((data)=> {
            setReview(data)
            setIsLoading(false)
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
    <ReviewComments reviewId={review.review.review_id} />
        </>
    )
}

export default SingleReview
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "./utils";
import ReviewCard from "./Review-Card";
import ReviewComments from "./Review-Comments";

export const SingleReview = () => {
    const {review_id} = useParams()
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSingleReview(review_id).then((data)=> {
            setReview(data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    return(
        <>
                <h1>Review:</h1>
    <section className="single-review">
        <ReviewCard review={review.review} showCommentCount={false}/>
    </section>
    <ReviewComments reviewId={review_id} />
        </>
    )
}

export default SingleReview
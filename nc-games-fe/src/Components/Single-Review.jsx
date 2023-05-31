import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "./utils";
import ReviewCard from "./Review-Card";

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
    <section className="single-review">
        <ReviewCard review={review.review} showCommentCount={false}/>
    </section>
        </>
    )
}

export default SingleReview
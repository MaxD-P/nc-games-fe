import axios from 'axios';

const gamesApi = axios.create({
    baseURL: `https://nc-games-portfolio-api.onrender.com/api`
})

export function fetchAllReviews(){
    return gamesApi.get('/reviews').then((res) => {
        return res.data
    })
}

export function fetchSingleReview(reviewId){
    return gamesApi.get(`/reviews/${reviewId}`).then((res) => {
        return res.data
    })
}

export function fetchReviewComments(reviewId){
    return gamesApi.get(`/reviews/${reviewId}/comments`).then((res) => {
        return res.data
    })
}

export function fetchCategories() {
    return gamesApi.get(`/categories`).then((res) => {
        return res.data.categories
    })
}

export function updateReviewVotes(reviewId){
    return gamesApi.patch(`/reviews/${reviewId}`, {inc_votes: 1})
    .then((res) => {
        return res.data;
    })
}

export function postComment(reviewId, newComment){
    const { username, body, votes} = newComment
    return gamesApi.post(`/reviews/${reviewId}/comments`, {
        username: username,
        body: body,
        votes: votes,
    })
    .then((res) => {
        console.log(username, body, votes, "body in the utils")
        console.log(res, "the res")
        return res.data
    })
    .catch((err)=> {
        console.log("postcomment function error", err)
    })
}
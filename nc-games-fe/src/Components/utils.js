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


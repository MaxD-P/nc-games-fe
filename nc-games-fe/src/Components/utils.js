import axios from 'axios';

const gamesApi = axios.create({
    baseURL: `https://nc-games-portfolio-api.onrender.com/api`
})

export function fetchAllReviews(){
    return gamesApi.get('/reviews').then((res) => {
        return res.data
    })
}


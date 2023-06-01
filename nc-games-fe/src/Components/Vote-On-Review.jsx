import React, {useState, useEffect} from 'react';
import { updateReviewVotes } from './utils';

const VoteButtons = ({ reviewId, setVotes }) => {
    const [voteUnSuccessful, setVoteUnSuccessful] = useState(false)

    const handleVote = (e) => {
        setVotes((currentValue) => currentValue + 1 )
        e.target.disabled= true;
        updateReviewVotes(reviewId)
        .then(() => {
            setVoteUnSuccessful(false)
        })
        .catch((err) => {
            setVoteUnSuccessful(true)
            e.target.disabled = false
                  })
      };

        return (
        <div>
            <button onClick={handleVote} >Upvote</button>
            {voteUnSuccessful && <p>Your vote was unsuccessful! Please refresh the page to try again.</p>}
        </div>
    )
}


export default VoteButtons
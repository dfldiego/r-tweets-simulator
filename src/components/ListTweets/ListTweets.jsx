import React from 'react';
import { Grid } from '@material-ui/core';
import './ListTweets.scss';
import Tweet from '../Tweet';

const ListTweets = ({ allTweets, deleteTweet }) => {
    console.log(allTweets);

    if (!allTweets || allTweets.length === 0) {
        return (
            <div className="list-tweets-empty">
                <h2>No hay Tweets...</h2>
            </div>
        )
    }

    return (
        <>
            <Grid
                container
                spacing={3}
                className="list-tweets"
            >
                {allTweets.map((tweety, index) => (
                    <Grid
                        key={index}
                        item xs={4}
                    >
                        <Tweet
                            tweety={tweety}
                            index={index}
                            deleteTweet={deleteTweet}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ListTweets

import React from 'react';
import { Grid } from '@material-ui/core';
import './ListTweets.scss';

const ListTweets = ({ allTweets }) => {
    console.log(allTweets);

    if (!allTweets || allTweets === 0) {
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
                {allTweets.map((tweet, index) => (
                    <Grid
                        key={index}
                        item xs={4}
                    >
                        Tweet..
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ListTweets

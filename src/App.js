import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';
import { TWEETS_STORAGE } from './utils/contants';

function App() {

  //guarda los mensajes del snakbar.
  const [toastprops, setToastprops] = useState({
    open: false,
    text: null
  })
  //guarda todos los tweets.
  const [allTweets, setAllTweets] = useState([]);
  const [reloadtweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const AllTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(AllTweetsArray);
    setReloadTweets(false);
  }, [reloadtweets]);

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  }

  return (
    <>
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet
          setToastprops={setToastprops}
          allTweets={allTweets}
        />
        <ListTweets
          allTweets={allTweets}
          deleteTweet={deleteTweet}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={toastprops.open}
          autoHideDuration={1000}
          message={<span id="message-id">{toastprops.text}</span>}
        />
      </Container>
    </>
  );
}

export default App;

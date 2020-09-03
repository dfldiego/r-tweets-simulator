import React, { useState } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';

function App() {

  const [toastprops, setToastprops] = useState({
    open: false,
    text: null
  })

  return (
    <>
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet
          setToastprops={setToastprops}
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

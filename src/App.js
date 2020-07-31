import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import UserCard from "./components/UserCard";
import TweetList from "./components/TweetList";
import TweetModal from "./components/TweetModal";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container maxWidth="md">
        <UserCard setOpen={setOpen} />
        <hr />
        <Typography align="center" variant="h6">
          Recent Tweet of User
        </Typography>
        <TweetList />
        <hr />
      </Container>
      <TweetModal open={open} setOpen={setOpen} />
    </>
  );
};
export default App;

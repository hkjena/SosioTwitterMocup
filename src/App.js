import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import UserCard from "./components/UserCard";
import TweetList from "./components/TweetList";

const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <UserCard />
        <hr />
        <Typography align="center" variant="h6">
          Recent Tweet of User
        </Typography>
        <TweetList />
        <hr />
      </Container>
    </>
  );
};
export default App;

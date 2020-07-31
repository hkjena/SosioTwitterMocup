import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import Tweet from "./Tweet";
import { getTweets } from "../actions/index";

const TweetList = ({ tweets, getTweets }) => {
  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <Container display="flex" maxWidth="sm">
      {tweets &&
        tweets.map(({ body }, i) => (
          <Tweet
            key={body}
            avatar={`https://picsum.photos/id/${Math.floor(
              100 + (200 - 100) * Math.random()
            )}/100`}
            tweet={body}
          />
        ))}
    </Container>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getTweets }
)(TweetList);

import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";

import Tweet from "./Tweet";

const TweetList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?limit=10"
      );
      const data = response.data.slice(0, 10);
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <Container display="flex" maxWidth="sm">
      {posts.map(({ title, body }, i) => (
        <Tweet
          key={title}
          avatar={`https://picsum.photos/id/10${18 + i}/100`}
          tweet={body}
        />
      ))}
    </Container>
  );
};

export default TweetList;

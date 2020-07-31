import postbin from "../APIs/postbin";
import axios from "axios";

export const getTweets = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?limit=10"
  );
  const data = response.data.slice(0, 10);
  dispatch({ type: "GET_TWEETS", payload: data });
};

export const addTweet = tweet => async dispatch => {
  const response = await postbin.post("/api/bin", { body: tweet });
  const data = JSON.parse(response.config.data);
  dispatch({ type: "ADD_TWEET", payload: data });
};
